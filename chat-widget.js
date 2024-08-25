(async function () {
  document.head.insertAdjacentHTML('beforeend', '<link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.16/tailwind.min.css" rel="stylesheet">');
  const { init, tx, id } = await import('./core/out/index.js');
  // Inject the CSS
  // ID for app: cx-service
  const APP_ID = '82da8809-d12d-4336-b32d-8435902a20ce'
  const db = init({ appId: APP_ID });
  let conversationId = localStorage.getItem('conversationId')

  if(conversationId) startListening();
  let agents = []

  db.subscribeQuery({
    agents: {}
  }, (resp) => {
    if (resp.error) {
      return;
    }
    if (resp.data) {
      console.log(resp.data);
      agents = resp.data.agents;
    }
  });

  let isFirstLoad = true;
  function startListening() {
    console.log('startListening', conversationId);
    localStorage.setItem('conversationId', conversationId);
    db.subscribeQuery({ conversations: {
      $: {
        where: {
          id: conversationId,
        },
      },
      chunks: {}
    } }, (resp) => {
      if (resp.data) {
        const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = ''
        const conversationChunks = resp.data.conversations[0]?.chunks;
          conversationChunks?.forEach((chunk) => {
            reply(chunk);
          });
          console.log('here', conversationChunks?.at(-1)?.content);
          if(conversationChunks?.at(-1)?.content === "This conversation has been resolved and closed. You can start a new conversation again.") {
            localStorage.removeItem('conversationId');
          }
      }
    });
  }





  const style = document.createElement('style');
  style.innerHTML = `
  .hidden {
    display: none;
  }
  #chat-widget-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    flex-direction: column;
  }
  #chat-popup {
    height: 70vh;
    max-height: 70vh;
    transition: all 0.3s;
    overflow: hidden;
  }
  @media (max-width: 768px) {
    #chat-popup {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-height: 100%;
      border-radius: 0;
    }
  }
  `;

  document.head.appendChild(style);

  // Create chat widget container
  const chatWidgetContainer = document.createElement('div');
  chatWidgetContainer.id = 'chat-widget-container';
  document.body.appendChild(chatWidgetContainer);

  // Inject the HTML
  chatWidgetContainer.innerHTML = `
    <div id="chat-bubble" class="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer text-3xl">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    </div>
    <div id="chat-popup" class="hidden absolute bottom-20 right-0 w-96 bg-white rounded-md shadow-md flex flex-col transition-all text-sm">
      <div id="chat-header" class="flex justify-between items-center p-4 bg-gray-800 text-white rounded-t-md">
        <h3 class="m-0 text-lg">CX - Talk to us</h3>
        <button id="close-popup" class="bg-transparent border-none text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div id="chat-messages" class="flex-1 p-4 overflow-y-auto"></div>
      <div id="chat-input-container" class="p-4 border-t border-gray-200">
        <div class="flex space-x-4 items-center">
          <input type="text" id="chat-input" class="flex-1 border border-gray-300 rounded-md px-4 py-2 outline-none w-3/4" placeholder="Type your message...">
          <button id="chat-submit" class="bg-gray-800 text-white rounded-md px-4 py-2 cursor-pointer">Send</button>
        </div>
        <div class="flex text-center text-xs pt-4">
          <span class="flex-1">Powered by <a href="https://www.instantdb.com/" target="_blank" class="text-indigo-600">InstantDB</a></span>
        </div>
      </div>
    </div>
  `;

  // Add event listeners
  const chatInput = document.getElementById('chat-input');
  const chatSubmit = document.getElementById('chat-submit');
  const chatMessages = document.getElementById('chat-messages');
  const chatBubble = document.getElementById('chat-bubble');
  const chatPopup = document.getElementById('chat-popup');
  const closePopup = document.getElementById('close-popup');

  chatSubmit.addEventListener('click', function () {

    const message = chatInput.value.trim();
    if (!message) return;

    chatMessages.scrollTop = chatMessages.scrollHeight;

    chatInput.value = '';

    onUserRequest(message);

  });

  chatInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      chatSubmit.click();
    }
  });

  chatBubble.addEventListener('click', function () {
    togglePopup();
  });

  closePopup.addEventListener('click', function () {
    togglePopup();
  });

  function togglePopup() {
    const chatPopup = document.getElementById('chat-popup');
    chatPopup.classList.toggle('hidden');
    if (!chatPopup.classList.contains('hidden')) {
      document.getElementById('chat-input').focus();
    }
  }


  async function onUserRequest(message) {
    // Handle user request here
   const isFirstMessage = localStorage.getItem('conversationId') ? false : true;
    console.log('User request:', message);

    if (isFirstMessage) {
      conversationId = id();
      localStorage.setItem('conversationId', conversationId);
      const name = ['Anant Kapoor', 'Rajesh Kumar', 'Sam Smith', 'Wolverine Deadpool', 'Neo Anderson'][Math.floor(Math.random() * 5)];

      await db.transact([
        tx.conversations[conversationId].update({
          createdAt: Date.now(),
          customerName: name,
          customerEmail: `${name.split(' ')[0].toLowerCase()}@test-plivo.com`
        }).link({
          publishedTo: agents.map(a => a.id)
        }),
        tx.chunks[id()].update({
          content: message,
          actor: 'customer',
          createdAt: Date.now()
        }).link({
          conversation: conversationId
        }),
      ]);

      await db.transact([
        tx.chunks[id()].update({
          content: 'Please wait while we connect you to an agent',
          actor: 'bot',
          createdAt: Date.now()
        }).link({
          conversation: conversationId
        })
      ]);

      startListening();
    } else {
      db.transact([
        tx.chunks[id()].update({
          content: message,
          actor: 'customer',
          createdAt: Date.now()
        }).link({
          conversation: conversationId
        })
      ]);
    }

    // Display user message

    chatInput.value = '';

  }

  function reply(message) {
    const chatMessages = document.getElementById('chat-messages');
    const replyElement = (message) => {
      const r = document.createElement('div');
    r.className = 'flex mb-3';
    r.innerHTML = `
      <div class="bg-gray-200 text-black rounded-lg py-2 px-4 max-w-[70%]">
        ${message}
      </div>
    `;
    return r;
    }

    const messageElement = (message) => {
      const m = document.createElement('div');
    m.className = 'flex justify-end mb-3';
    m.innerHTML = `
      <div class="bg-gray-800 text-white rounded-lg py-2 px-4 max-w-[70%]">
        ${message}
      </div>
    `;
    return m;
    }
    chatMessages.appendChild(message.actor === 'customer' ? messageElement(message.content) : replyElement(message.content))

    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

})();

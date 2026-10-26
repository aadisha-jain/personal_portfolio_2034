console.log("JavaScript connected");

const projectSearch = document.getElementById("project-search");
const projectSearchStatus = document.getElementById("project-search-status");
const projectCards = document.querySelectorAll(".project-list li");

if (projectSearch && projectSearchStatus) {
  projectSearch.addEventListener("input", function () {
    const query = projectSearch.value.trim().toLocaleLowerCase();
    let visibleProjects = 0;

    projectCards.forEach(function (project) {
      const matches = project.textContent.toLocaleLowerCase().includes(query);
      project.hidden = !matches;
      if (matches) visibleProjects += 1;
    });

    projectSearchStatus.textContent = query
      ? `${visibleProjects} of ${projectCards.length} projects shown.`
      : `${projectCards.length} projects.`;
  });

  projectSearchStatus.textContent = `${projectCards.length} projects.`;
}

const chatInput = document.getElementById("user-input");
const chatMessages = document.getElementById("chat-messages");
const chatStatus = document.getElementById("chat-status");
const chatSendButton = document.getElementById("send-btn");

function addChatMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.className = sender === "user" ? "user-msg" : "bot-msg";
  const speaker = document.createElement("b");
  speaker.textContent = sender === "user" ? "You: " : "AI: ";
  messageElement.append(speaker, document.createTextNode(message));
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

if (chatInput && chatMessages && chatStatus && chatSendButton) {
  function handleChat() {
    const originalQuestion = chatInput.value.trim();
    const question = originalQuestion.toLowerCase();
    if (!question) return;

    addChatMessage(originalQuestion, "user");
    chatInput.value = "";
    chatSendButton.disabled = true;
    chatStatus.textContent = "Thinking…";

    window.setTimeout(function () {
      let reply;

      if (question.includes("who are you") || question.includes("name") || question.includes("about you")) {
        reply = "I am Aadisha Jain's portfolio assistant! Aadisha is a B.Tech Computer Science and Engineering student at JECRC University in Jaipur (Student ID: 25BCON2034).";
      } else if (question.includes("skill") || question.includes("technology") || question.includes("tech stack")) {
        reply = "Aadisha's technical skills include Python, C, C++, Data Structures & Algorithms, HTML, CSS, JavaScript, and working with modern developer tools like Cursor AI and Vercel.";
      } else if (question.includes("project") || question.includes("completed")) {
        reply = "Aadisha has completed 5 major projects: 1) Python Programs Collection (Factorial, Fibonacci, Dictionary conversion), 2) Messy Python Code Improvement (AI-optimized), 3) Bug Fixing Using Cursor AI, 4) Interactive Quiz Application, and 5) Book Reading List Application.";
      } else if (question.includes("python") || question.includes("factorial") || question.includes("fibonacci")) {
        reply = "The Python Programs Collection features script implementations for calculating factorials, generating Fibonacci sequences, and converting data structures to dictionaries, complete with an updated repository README.";
      } else if (question.includes("buggy") || question.includes("bug")) {
        reply = "In the Bug Fixing project, an incorrect unit-testing program was identified, carefully tested with test cases, and corrected using Cursor AI assistance.";
      } else if (question.includes("reading list") || question.includes("book")) {
        reply = "The Book Reading List Application (developed in Lecture 11) allows users to dynamically track books they want to read, currently reading, or finished, with deployment links included.";
      } else if (question.includes("quiz")) {
        reply = "The Interactive Quiz Application (developed in Lecture 10) is a dynamic web-based quiz featuring instant score evaluation and smooth user interaction.";
      } else if (question.includes("github") || question.includes("repo")) {
        reply = "You can explore all of Aadisha's repositories directly on her GitHub profile at github.com/aadisha-jain.";
      } else {
        reply = "That's a great question! You can find more details about Aadisha's background, education, and projects right here on her portfolio website or by browsing her GitHub profile.";
      }

      addChatMessage(reply, "assistant");
      chatStatus.textContent = "";
      chatSendButton.disabled = false;
      chatInput.focus();
    }, 500);
  }

  chatSendButton.addEventListener("click", handleChat);
  chatInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") handleChat();
  });
}

const themeButton = document.getElementById("themeToggle");
themeButton.addEventListener("click", function () {
   document.body.classList.toggle("dark-mode");
   if (document.body.classList.contains("dark-mode")) {
  themeButton.textContent = "Switch to Light Mode";
   } else {
  themeButton.textContent = "Switch to Dark Mode";
   }
});

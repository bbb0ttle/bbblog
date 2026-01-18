const LOGO_SRC = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjMzMjEgNy4zNDc0MUMyMC4yNzY5IDcuMzQ3NDEgMjIuNjY0MSA0Ljk2MDE3IDIyLjY2NDEgMi4wMTUzNlYxMC42NjQxQzIyLjY2NDEgMTEuNzcwOCAyMS43NjcgMTIuNjY3OSAyMC42NjAzIDEyLjY2NzlIMy4zMzk3M0MyLjIzMzA0IDEyLjY2NzkgMS4zMzU4OSAxMS43NzA4IDEuMzM1ODkgMTAuNjY0MVYyLjAxNTM2QzEuMzM1ODkgNC45NjAxNyAzLjcyMzE0IDcuMzQ3NDEgNi42Njc5NSA3LjM0NzQxQzkuNjEyNzYgNy4zNDc0MSAxMiA0Ljk2MDE3IDEyIDIuMDE1MzZDMTIgNC45NjAxNyAxNC4zODcyIDcuMzQ3NDEgMTcuMzMyMSA3LjM0NzQxWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMTIgMi4wMDM4NEwxMiAyLjAxNTM2QzEyIDIuMDExNTEgMTIgMi4wMDc2OCAxMiAyLjAwMzg0WiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMTEuMzMyMSAxNC4wMDM4QzExLjMzODMgMTYuOTQzNCAxMy43MjMxIDE5LjMyNDQgMTYuNjY0MSAxOS4zMjQ0QzE5LjYwNTEgMTkuMzI0NCAyMS45ODk5IDE2Ljk0MzQgMjEuOTk2MiAxNC4wMDM4SDExLjMzMjFaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0yLjAwMzg0IDE0LjAwMzhDMi4wMDM4NCAxNC4wMDc3IDIuMDAzODMgMTQuMDExNSAyLjAwMzg0IDE0LjAxNTRDMi4wMTAwNiAxNi45NTQ5IDQuMzk0OTMgMTkuMzM1OSA3LjMzNTkgMTkuMzM1OUMxMC4yNzY5IDE5LjMzNTkgMTIuNjYxNyAxNi45NTQ5IDEyLjY2NzkgMTQuMDE1NEgyLjAwMzg0VjE0LjAwMzhaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0yLjY3MTc5IDIuMDAzODRDMi42NzE3OSAyLjc0MTYzIDIuMDczNjkgMy4zMzk3MyAxLjMzNTg5IDMuMzM5NzNDMC41OTgwOTkgMy4zMzk3MyAwIDIuNzQxNjMgMCAyLjAwMzg0QzAgMS4yNjYwNSAwLjU5ODA5OSAwLjY2Nzk0NiAxLjMzNTg5IDAuNjY3OTQ2QzIuMDczNjkgMC42Njc5NDYgMi42NzE3OSAxLjI2NjA1IDIuNjcxNzkgMi4wMDM4NFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTEzLjMzNTkgMS4zMzU4OUMxMy4zMzU5IDIuMDczNjkgMTIuNzM3OCAyLjY3MTc5IDEyIDIuNjcxNzlDMTEuMjYyMiAyLjY3MTc5IDEwLjY2NDEgMi4wNzM2OSAxMC42NjQxIDEuMzM1ODlDMTAuNjY0MSAwLjU5ODA5OSAxMS4yNjIyIDAgMTIgMEMxMi43Mzc4IDAgMTMuMzM1OSAwLjU5ODA5OSAxMy4zMzU5IDEuMzM1ODlaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0yNCAyLjAwMzg0QzI0IDIuNzQxNjMgMjMuNDAxOSAzLjMzOTczIDIyLjY2NDEgMy4zMzk3M0MyMS45MjYzIDMuMzM5NzMgMjEuMzI4MiAyLjc0MTYzIDIxLjMyODIgMi4wMDM4NEMyMS4zMjgyIDEuMjY2MDUgMjEuOTI2MyAwLjY2Nzk0NiAyMi42NjQxIDAuNjY3OTQ2QzIzLjQwMTkgMC42Njc5NDYgMjQgMS4yNjYwNSAyNCAyLjAwMzg0WiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K";

class BBPost extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'}).innerHTML = `
      <style>
        .post{margin-bottom: 100px}
        .post-title{font-size:1.2em}
        .post-content{margin-top:4px;color:#121111}
        .post-date{font-size:.8em;color:#999}
        a {color: #007fff; text-decoration: none;}
      </style>
      <div class="post">
        <div class="post-title"></div>
        <div class="post-date"></div>
        <div class="post-content"></div>
      </div>`;
  }
  set title(v: string){this.shadowRoot!.querySelector('.post-title')!.textContent=v}
  set content(v: string){this.shadowRoot!.querySelector('.post-content')!.innerHTML=v}
  set date(v: string){this.shadowRoot!.querySelector('.post-date')!.textContent=v}
}

class BBBlog extends HTMLElement {
  static get observedAttributes() {
    return ['content'];
  }

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
    this.fetchPosts();
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    if (name === 'content' && oldValue !== newValue && this.isConnected) {
      this.fetchPosts();
    }
  }

  render() {
    this.shadowRoot!.innerHTML = `
      <style>
        .posts-container {
          display: grid;
          grid-template-columns: 1fr min(45rem, 84%) 1fr;
          line-height: 1.65;
        }
        .posts-container > * {
          grid-column: 2;
        }
        .logo {
          display: block;
          width: 24px;
          margin: 100px 0;
        }
        @media (min-width: 768px) {
          .posts-container {
            grid-template-columns: 1fr min(45rem, 34%) 1fr;
          }
        }
      </style>
      <div class="posts-container">
        <img class="logo" src="${LOGO_SRC}" alt="logo">
        <div class="fallback" style="display:none;"><slot></slot></div>
      </div>
    `;
  }

  async fetchPosts() {
    const contentPath = this.getAttribute('content');
    if (!contentPath) return;

    const container = this.shadowRoot!.querySelector('.posts-container');
    const fallback = this.shadowRoot!.querySelector('.fallback') as HTMLElement | null;
    
    try {
      const response = await fetch(contentPath);
      if (!response.ok) throw new Error('Fetch failed');
      
      const data: Array<{title: string; content: string}> = await response.json();
      if (fallback) fallback.style.display = 'none';
      
      data.forEach(p => {
        const el = document.createElement('bb-post') as BBPost;
        el.title = p.title;
        el.content = p.content;
        container?.appendChild(el);
      });
    } catch (error) {
      if (container) container.innerHTML = '';
      if (fallback) fallback.style.display = 'block';
    }
  }
}

customElements.define('bb-post', BBPost);
customElements.define('bb-blog', BBBlog);
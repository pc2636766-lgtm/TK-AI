import { useState } from 'react'
import { ArrowUp, AudioLines, Bot, ChevronDown, Menu, Mic, Plus, Sparkles } from 'lucide-react'

type Message = { role: 'assistant' | 'user'; content: string }

const suggestions = [
  { title: 'Criar algo', text: 'Me ajude a ter ideias para um novo projeto.' },
  { title: 'Aprender', text: 'Explique um assunto difícil de um jeito simples.' },
  { title: 'Resolver', text: 'Me ajude a organizar uma tarefa passo a passo.' },
  { title: 'Escrever', text: 'Me ajude a escrever um texto incrível.' },
]

export default function App() {
  const [messages, setMessages] = useState<Message[]>([])
  const [prompt, setPrompt] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  function sendMessage(value = prompt) {
    const content = value.trim()
    if (!content) return
    setMessages(current => [...current, { role: 'user', content }])
    setPrompt('')
  }

  return (
    <main className="app-shell">
      <aside className={menuOpen ? 'sidebar open' : 'sidebar'}>
        <div className="brand"><div className="brand-mark">TK</div><span>TK <b>AI</b></span></div>
        <button className="new-chat" onClick={() => setMessages([])}><Plus size={17}/> Nova conversa</button>
        <div className="sidebar-label">SEU ESPAÇO</div>
        <div className="side-note">Suas conversas aparecerão aqui.</div>
        <div className="sidebar-bottom"><div className="avatar">TK</div><div><strong>Visitante</strong><small>Conheça a TK AI</small></div><ChevronDown size={16}/></div>
      </aside>

      <section className="main-panel">
        <header className="topbar">
          <button className="icon-button mobile-menu" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}><Menu size={20}/></button>
          <div className="model-name">TK AI <span>Beta</span></div>
          <button className="mode-button"><Sparkles size={15}/> Inteligência <ChevronDown size={14}/></button>
        </header>

        <div className="conversation">
          {messages.length === 0 ? (
            <div className="welcome">
              <div className="orb"><div className="orb-core"><Bot size={34}/></div></div>
              <div className="eyebrow"><span/> SUA NOVA COMPANHEIRA DE IDEIAS</div>
              <h1>O que vamos<br/><em>descobrir hoje?</em></h1>
              <p>Eu sou a TK AI. Estou aqui para conversar, criar e ajudar você a transformar ideias em realidade.</p>
              <div className="suggestions">{suggestions.map(item => <button key={item.title} onClick={() => sendMessage(item.text)}><strong>{item.title}</strong><span>{item.text}</span></button>)}</div>
            </div>
          ) : (
            <div className="messages">{messages.map((message, index) => <div className={'message ' + message.role} key={index}><div className="message-avatar">{message.role === 'assistant' ? 'TK' : 'V'}</div><div><small>{message.role === 'assistant' ? 'TK AI' : 'Você'}</small><p>{message.content}</p></div></div>)}
              <div className="setup-notice"><Sparkles size={16}/><span>A interface inicial está pronta. A conexão com o modelo de IA será ativada na próxima etapa, com a chave protegida no servidor.</span></div>
            </div>
          )}
        </div>

        <div className="composer-wrap">
          <form className="composer" onSubmit={event => { event.preventDefault(); sendMessage() }}>
            <textarea value={prompt} onChange={event => setPrompt(event.target.value)} onKeyDown={event => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); sendMessage() } }} placeholder="Converse com a TK AI..." rows={1}/>
            <div className="composer-actions"><button type="button" className="tool-button" title="Em breve: conversa por voz"><Mic size={18}/></button><button type="button" className="tool-button voice-wave" title="Em breve: modo de voz"><AudioLines size={18}/></button><button className="send-button" type="submit" disabled={!prompt.trim()} aria-label="Enviar mensagem"><ArrowUp size={19}/></button></div>
          </form>
          <div className="disclaimer">A TK AI está em construção. As respostas inteligentes e a memória serão conectadas em breve.</div>
        </div>
      </section>
    </main>
  )
}

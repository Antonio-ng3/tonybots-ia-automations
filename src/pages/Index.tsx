import React from 'react';
import { Button } from '@/components/ui/button';
import { VideoPlayer } from '@/components/VideoPlayer';
import { CounterAnimation } from '@/components/CounterAnimation';
import { Accordion } from '@/components/Accordion';
import { CheckCircle, Star, Shield, Mail } from 'lucide-react';
import logoTonyBots from '@/assets/logo-tonybots.jpg';
import heroAutomation from '@/assets/hero-automation.jpg';
import featureIcons from '@/assets/feature-icons.jpg';

const Index = () => {
  const faqItems = [
    {
      id: 'q1',
      question: 'Preciso ter conhecimento técnico?',
      answer: 'Não! Este ebook foi criado especificamente para iniciantes. Explicamos tudo passo a passo, desde a instalação até automações avançadas.'
    },
    {
      id: 'q2', 
      question: 'Como recebo o ebook após a compra?',
      answer: 'Imediatamente após a confirmação do pagamento, você receberá um email com o link para download do ebook em PDF.'
    },
    {
      id: 'q3',
      question: 'Funciona em qualquer sistema operacional?',
      answer: 'Sim! O N8N funciona em Windows, Mac e Linux. Mostramos como instalar em todos os sistemas.'
    },
    {
      id: 'q4',
      question: 'Preciso pagar pelas APIs de IA?',
      answer: 'Algumas APIs têm planos gratuitos generosos para começar. Ensinamos como usar as versões gratuitas e como otimizar custos quando escalar.'
    },
    {
      id: 'q5',
      question: 'Posso usar para fins comerciais?',
      answer: 'Absolutamente! Todos os workflows e automações podem ser usados em projetos comerciais. Muitos exemplos são voltados para negócios.'
    }
  ];

  const features = [
    {
      title: 'Aprenda do zero, sem conhecimento técnico',
      description: 'Este ebook foi criado especialmente para iniciantes. Você não precisa ter conhecimento prévio em programação ou automação para começar a usar IA no N8N.'
    },
    {
      title: 'Integre ChatGPT e outras IAs no N8N',
      description: 'Descubra como conectar as principais ferramentas de IA ao N8N e criar workflows inteligentes que trabalham 24/7 para você.'
    },
    {
      title: 'Automatize processos complexos',
      description: 'Aprenda a criar automações avançadas que podem processar dados, gerar conteúdo, responder emails e muito mais usando o poder da IA.'
    },
    {
      title: 'Exemplos práticos e aplicáveis',
      description: 'Mais de 20 exemplos reais de automações com IA que você pode implementar imediatamente em seu negócio ou projetos pessoais.'
    }
  ];

  const timelineItems = [
    {
      chapter: 'Capítulo 1',
      title: 'Introdução ao N8N e IA',
      description: 'Entenda os conceitos básicos do N8N, como instalar e configurar, e descubra como a Inteligência Artificial pode revolucionar suas automações.'
    },
    {
      chapter: 'Capítulo 2',
      title: 'Conectando APIs de IA',
      description: 'Aprenda passo a passo como conectar ChatGPT, Claude, Gemini e outras IAs ao N8N. Configuração de chaves de API e primeiros testes.'
    },
    {
      chapter: 'Capítulo 3',
      title: 'Workflows Inteligentes',
      description: 'Crie seus primeiros workflows com IA: processamento de texto, análise de sentimentos, geração de conteúdo e muito mais.'
    },
    {
      chapter: 'Capítulo 4',
      title: 'Casos Práticos',
      description: '20+ exemplos reais de automações com IA: chatbots, análise de dados, geração de relatórios, moderação de conteúdo e automação de marketing.'
    },
    {
      chapter: 'Capítulo 5',
      title: 'Otimização e Escalabilidade',
      description: 'Aprenda a otimizar seus workflows, gerenciar custos de API, implementar cache e escalar suas automações para uso profissional.'
    }
  ];

  const comboItems = [
    {
      title: 'Ebook Completo',
      subtitle: '(120+ páginas)',
      price: 'R$47,00',
      isStriked: false
    },
    {
      title: 'Templates Prontos',
      subtitle: '(20+ workflows para copiar)',
      price: 'R$37,00',
      isStriked: true,
      badge: 'GRÁTIS'
    },
    {
      title: 'Guia de APIs',
      subtitle: '(configuração passo a passo)',
      price: 'R$27,00',
      isStriked: true,
      badge: 'GRÁTIS'
    },
    {
      title: 'Suporte por Email',
      subtitle: '(30 dias)',
      price: 'R$47,00',
      isStriked: true,
      badge: 'GRÁTIS'
    },
    {
      title: 'Atualizações Gratuitas',
      subtitle: '(por 1 ano)',
      price: 'R$37,00',
      isStriked: true,
      badge: 'GRÁTIS'
    }
  ];

  return (
    <div className="w-100" style={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section className="py-5">
        <div className="container-fluid">
          <div className="container">
            {/* Navigation */}
            <div className="row align-items-center mb-4 d-none d-md-flex">
              <div className="col-md-6">
                <img src={logoTonyBots} alt="Logo TonyBots" className="img-fluid" style={{ maxHeight: '60px' }} />
              </div>
              <div className="col-md-6">
                <nav className="d-flex justify-content-end gap-4">
                  <a href="#vantagens" className="text-decoration-none text-muted-foreground">Vantagens</a>
                  <a href="#metodo" className="text-decoration-none text-muted-foreground">Método</a>
                  <a href="#garantia" className="text-decoration-none text-muted-foreground">Garantia</a>
                  <a href="#faq" className="text-decoration-none text-muted-foreground">Dúvidas</a>
                </nav>
              </div>
            </div>

            <div className="divider mb-5 d-none d-md-block"></div>

            {/* Hero Content */}
            <div className="row align-items-center mb-5">
              <div className="col-lg-8 mb-4 mb-lg-0">
                <h1 className="display-4 fw-bold mb-4">
                  Transforme seu N8N em uma <span className="text-gradient">Máquina de IA</span>
                </h1>
                <p className="lead text-muted-foreground mb-4">
                  Aprenda a integrar <strong>Inteligência Artificial</strong> no N8N mesmo sendo iniciante e automatize processos que vão revolucionar seu negócio!
                </p>
              </div>
              <div className="col-lg-4">
                <div className="text-center">
                  <img src={heroAutomation} alt="AI Automation" className="img-fluid rounded-3 mb-3" />
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="card-glow p-4 mb-5">
              <div className="row">
                <div className="col-12 mb-4">
                  <VideoPlayer 
                    src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
                    className="w-100"
                  />
                </div>
                
                <div className="col-md-6 mb-4 mb-md-0">
                  <div className="text-center">
                    <h3 className="h5 mb-3">
                      + de <CounterAnimation target={1000} /> pessoas já transformaram seus negócios
                    </h3>
                    <div className="d-flex align-items-center justify-content-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} className="text-warning" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-2">Por apenas</p>
                    <div className="d-flex align-items-end justify-content-center mb-3">
                      <span className="h4 me-1">R$</span>
                      <span className="display-4 fw-bold text-primary">19</span>
                      <span className="h4">,90</span>
                    </div>
                    <Button 
                      size="lg" 
                      className="btn-success-gradient w-100 py-3 text-uppercase fw-bold"
                      asChild
                    >
                      <a href="https://pay.hotmart.com/W100710846L?checkoutMode=10" target="_blank" rel="noopener noreferrer">
                        Quero dar meu primeiro passo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="vantagens" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary text-uppercase fw-bold px-3 py-2 mb-3">Vantagens</span>
            <h2 className="mb-3">Automatize processos com IA</h2>
            <p className="lead text-muted-foreground">e transforme seu negócio!</p>
          </div>

          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card-minimal h-100 p-4 text-center">
                  <div 
                    className="mb-3 mx-auto rounded"
                    style={{ 
                      width: '80px', 
                      height: '80px',
                      backgroundImage: `url(${featureIcons})`,
                      backgroundSize: '200% 200%',
                      backgroundPosition: `${(index % 2) * 100}% ${Math.floor(index / 2) * 100}%`
                    }}
                  />
                  <h4 className="h5 mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground small">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-4" style={{ background: 'var(--gradient-primary)' }}>
        <div className="container">
          <h2 className="text-center text-white fw-bold text-uppercase">
            Inteligência Artificial<br className="d-md-none" /> Aplicada no N8N!
          </h2>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary text-uppercase fw-bold px-3 py-2 mb-3">O que os leitores dizem</span>
            <h2 className="mb-3">Você será o próximo case de sucesso!</h2>
            <p className="lead text-muted-foreground">Veja como pessoas comuns estão transformando seus negócios com automação inteligente usando N8N e IA.</p>
          </div>

          <div className="row g-4">
            {[
              { name: 'Maria Silva', case: 'Automatizou atendimento ao cliente com IA' },
              { name: 'João Santos', case: 'Criou sistema de análise de dados automatizado' },
              { name: 'Ana Costa', case: 'Automatizou criação de conteúdo para redes sociais' },
              { name: 'Carlos Oliveira', case: 'Implementou chatbot inteligente em 1 dia' }
            ].map((testimonial, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card-minimal h-100 overflow-hidden">
                  <div className="ratio ratio-16x9 bg-muted">
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="text-muted">Vídeo Depoimento</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h5 className="h6 mb-1">{testimonial.name}</h5>
                    <p className="small text-muted-foreground mb-0">{testimonial.case}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/Method Section */}
      <section id="metodo" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary text-uppercase fw-bold px-3 py-2 mb-3">Conteúdo</span>
            <h2 className="mb-3">O que você vai aprender neste ebook</h2>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              {timelineItems.map((item, index) => (
                <div key={index} className="d-flex mb-4">
                  <div className="me-4 d-flex flex-column align-items-center">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <span className="text-white fw-bold">{index + 1}</span>
                    </div>
                    {index < timelineItems.length - 1 && (
                      <div className="bg-primary" style={{ width: '2px', height: '100px', marginTop: '10px' }}></div>
                    )}
                  </div>
                  
                  <div className="card-minimal p-4 flex-grow-1">
                    <span className="badge bg-primary text-uppercase small mb-2">{item.chapter}</span>
                    <h4 className="h5 mb-2">{item.title}</h4>
                    <p className="text-muted-foreground mb-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Combo/Pricing Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary text-uppercase fw-bold px-3 py-2 mb-3">Oferta Especial</span>
            <h2 className="mb-3">Tudo o que você recebe por apenas R$ 19,90:</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card-glow p-4 p-md-5">
                <div className="row">
                  <div className="col-lg-4 mb-4 mb-lg-0">
                    <img src={logoTonyBots} alt="Logo TonyBots" className="img-fluid mb-3" style={{ maxWidth: '250px' }} />
                    <p className="text-muted-foreground">
                      Um investimento menor que uma pizza, por conhecimento que pode transformar completamente sua forma de trabalhar com automação.
                    </p>
                  </div>
                  
                  <div className="col-lg-8">
                    <h3 className="mb-4">Tudo o que você leva hoje:</h3>
                    
                    {comboItems.map((item, index) => (
                      <div key={index} className="d-flex align-items-center justify-content-between py-3 border-bottom border-muted">
                        <div className="d-flex align-items-center">
                          <CheckCircle className="text-success me-3" size={20} />
                          <div>
                            <div className="fw-semibold">{item.title}</div>
                            <small className="text-muted-foreground">{item.subtitle}</small>
                          </div>
                        </div>
                        
                        <div className="d-flex align-items-center gap-2">
                          {item.isStriked && (
                            <span className="badge bg-danger text-decoration-line-through">{item.price}</span>
                          )}
                          {!item.isStriked && (
                            <span className="badge bg-muted">{item.price}</span>
                          )}
                          {item.badge && (
                            <span className="badge bg-success">{item.badge}</span>
                          )}
                        </div>
                      </div>
                    ))}

                    <div className="divider my-4"></div>

                    <div className="text-center">
                      <h3 className="mb-3 text-foreground">
                        Valor TOTAL: <span className="text-decoration-line-through" style={{ color: 'hsl(var(--muted-foreground))' }}>R$ 195,00</span>
                      </h3>
                      <div className="d-flex align-items-end justify-content-center mb-4">
                        <span className="text-muted-foreground me-3">Por apenas</span>
                        <span className="h4 me-1">R$</span>
                        <span className="display-4 fw-bold text-primary">19</span>
                        <span className="h4">,90</span>
                      </div>
                      
                      <Button 
                        size="lg" 
                        className="btn-success-gradient w-100 py-3 text-uppercase fw-bold mb-3"
                        asChild
                      >
                        <a href="https://pay.hotmart.com/W100710846L?checkoutMode=10" target="_blank" rel="noopener noreferrer">
                          Quero dar meu primeiro passo
                        </a>
                      </Button>
                      
                      <div className="d-flex align-items-center justify-content-center gap-3 opacity-50">
                        <span className="small">Pagamento 100% seguro</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section id="garantia" className="py-5" style={{ background: 'var(--gradient-surface)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card-glow p-4 p-md-5 text-center">
                <Shield className="text-primary mx-auto mb-4" size={80} />
                <span className="badge bg-primary text-uppercase fw-bold px-3 py-2 mb-3">Garantia</span>
                <h2 className="mb-3">Garantia de 7 dias</h2>
                <p className="lead text-muted-foreground mb-4">
                  Estou tão confiante no valor deste ebook que ofereço garantia total de 7 dias. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
                </p>
                
                <Button 
                  size="lg" 
                  className="btn-success-gradient px-5 py-3 text-uppercase fw-bold"
                  asChild
                >
                  <a href="https://pay.hotmart.com/W100710846L?checkoutMode=10" target="_blank" rel="noopener noreferrer">
                    Quero dar meu primeiro passo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <span className="badge bg-primary text-uppercase fw-bold px-3 py-2 mb-3">FAQ</span>
                <h2 className="mb-3">Perguntas Frequentes</h2>
              </div>
              
              <Accordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 bg-card">
        <div className="container">
          <div className="text-center mb-4">
            <img src={logoTonyBots} alt="Logo TonyBots" className="img-fluid mb-3" style={{ maxHeight: '80px' }} />
            <div className="d-flex align-items-center justify-content-center gap-2">
              <Mail size={20} className="text-muted-foreground" />
              <span className="fw-semibold text-card-foreground">Suporte:</span>
              <a href="mailto:contato@tonybots.com" className="text-muted-foreground text-decoration-none">
                contato@tonybots.com
              </a>
            </div>
          </div>
          
          <div className="divider mb-4"></div>
          
          <div className="text-center">
            <p className="small text-muted-foreground mb-0">
              © Copyright 2025 TonyBots. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Powered by */}
      <div className="py-3 bg-muted">
        <div className="container">
          <p className="text-center small text-muted-foreground mb-0">
            Powered by TonyBots
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

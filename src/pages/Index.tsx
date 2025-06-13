
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Building, Users, Trophy, Phone, Mail, MapPin } from "lucide-react";

const Index = () => {
  const [selectedContactType, setSelectedContactType] = useState("cliente");

  const heroSlides = [
    {
      title: "Excelência em Incorporação",
      subtitle: "Transformando sonhos em realidade há mais de 30 anos",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Projetos de Alto Padrão",
      subtitle: "Desenvolvimento imobiliário premium para clientes exigentes",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      title: "Inovação e Qualidade",
      subtitle: "Construindo o futuro com tecnologia e sustentabilidade",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    }
  ];

  const directors = [
    {
      name: "João Silva",
      position: "CEO & Fundador",
      description: "Com mais de 25 anos de experiência no mercado imobiliário, João Silva fundou a empresa com a visão de criar empreendimentos únicos e de alta qualidade. Sua liderança estratégica tem sido fundamental para o crescimento sustentável da organização.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      name: "Maria Santos",
      position: "Diretora de Projetos",
      description: "Arquiteta renomada com especialização em projetos residenciais de luxo. Maria é responsável por garantir que cada empreendimento atenda aos mais altos padrões de design e funcionalidade, sempre priorizando a satisfação do cliente.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      name: "Carlos Oliveira",
      position: "Diretor Comercial",
      description: "Especialista em relacionamento com incorporadores e corretores, Carlos possui vasta experiência em negociações de alto valor. Sua expertise em mercado imobiliário premium tem sido essencial para o sucesso comercial da empresa.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    }
  ];

  const stats = [
    { icon: Building, number: "150+", label: "Empreendimentos Entregues" },
    { icon: Users, number: "50K+", label: "Famílias Atendidas" },
    { icon: Trophy, number: "25", label: "Prêmios Recebidos" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/92f1bad9-a14e-4980-8bb9-185aa0eb2acc.png" 
              alt="Logo da Empresa" 
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#sobre" className="text-blue-900 hover:text-blue-700 font-medium">Sobre</a>
            <a href="#diretoria" className="text-blue-900 hover:text-blue-700 font-medium">Diretoria</a>
            <a href="#contato" className="text-blue-900 hover:text-blue-700 font-medium">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Carousel */}
      <section className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-700">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                  <div className="relative container mx-auto px-4 h-full flex items-center">
                    <div className="text-white max-w-2xl">
                      <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                      <p className="text-xl mb-8 opacity-90">{slide.subtitle}</p>
                      <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 text-lg">
                        Conheça Nossos Projetos
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Sobre a Empresa</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Há mais de três décadas no mercado, somos referência em incorporação imobiliária de alto padrão, 
              oferecendo soluções completas e personalizadas para nossos clientes e parceiros.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-8 border-blue-200">
                <CardContent className="pt-6">
                  <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Directors Carousel */}
      <section id="diretoria" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Nossa Diretoria</h2>
            <p className="text-xl text-gray-700">Conheça os líderes que fazem a diferença</p>
          </div>
          
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {directors.map((director, index) => (
                <CarouselItem key={index}>
                  <Card className="border-blue-200">
                    <CardContent className="p-12">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0">
                          <img 
                            src={director.image} 
                            alt={director.name}
                            className="w-48 h-48 rounded-full object-cover border-4 border-blue-200"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-3xl font-bold text-blue-900 mb-2">{director.name}</h3>
                          <p className="text-xl text-blue-600 mb-6">{director.position}</p>
                          <p className="text-gray-700 text-lg leading-relaxed">{director.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">Vídeo Comemorativo</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 rounded-lg p-16 border-2 border-dashed border-gray-300">
              <div className="text-gray-500">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l7-5-7-5z"/>
                  </svg>
                </div>
                <p className="text-xl">Vídeo comemorativo será disponibilizado em breve</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Fale Conosco</h2>
            <p className="text-xl text-gray-700">Selecione seu perfil para um atendimento personalizado</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs value={selectedContactType} onValueChange={setSelectedContactType} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="cliente" className="text-lg py-3">Cliente</TabsTrigger>
                <TabsTrigger value="incorporador" className="text-lg py-3">Incorporador</TabsTrigger>
                <TabsTrigger value="corretor" className="text-lg py-3">Corretor</TabsTrigger>
              </TabsList>
              
              <TabsContent value="cliente">
                <Card className="border-blue-200">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Atendimento ao Cliente</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="nome">Nome Completo</Label>
                        <Input id="nome" placeholder="Seu nome" className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="email">E-mail</Label>
                        <Input id="email" type="email" placeholder="seu@email.com" className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input id="telefone" placeholder="(11) 99999-9999" className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="interesse">Interesse</Label>
                        <Input id="interesse" placeholder="Tipo de imóvel" className="mt-2" />
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 mt-6 w-full py-3">
                      Enviar Mensagem
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="incorporador">
                <Card className="border-blue-200">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Parcerias Incorporadores</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="empresa">Empresa</Label>
                        <Input id="empresa" placeholder="Nome da empresa" className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="contato">Pessoa de Contato</Label>
                        <Input id="contato" placeholder="Nome do responsável" className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="email-inc">E-mail</Label>
                        <Input id="email-inc" type="email" placeholder="contato@empresa.com" className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="projeto">Tipo de Projeto</Label>
                        <Input id="projeto" placeholder="Residencial/Comercial" className="mt-2" />
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 mt-6 w-full py-3">
                      Solicitar Reunião
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="corretor">
                <Card className="border-blue-200">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Rede de Corretores</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="nome-corretor">Nome</Label>
                        <Input id="nome-corretor" placeholder="Seu nome" className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="creci">CRECI</Label>
                        <Input id="creci" placeholder="Número do CRECI" className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="email-corretor">E-mail</Label>
                        <Input id="email-corretor" type="email" placeholder="seu@email.com" className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="imobiliaria">Imobiliária</Label>
                        <Input id="imobiliaria" placeholder="Nome da imobiliária" className="mt-2" />
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 mt-6 w-full py-3">
                      Cadastrar na Rede
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img 
                src="/lovable-uploads/92f1bad9-a14e-4980-8bb9-185aa0eb2acc.png" 
                alt="Logo da Empresa" 
                className="h-12 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-blue-200">
                Excelência em incorporação imobiliária há mais de 30 anos.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contato</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>(11) 3000-0000</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>contato@empresa.com.br</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Horário de Funcionamento</h4>
              <div className="text-blue-200">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 9h às 14h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 - Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

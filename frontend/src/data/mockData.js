// Mock Services
const mockServices = [
  {
    id: '1',
    title: 'Automatización de Procesos',
    description: 'Optimiza tus operaciones eliminando tareas repetitivas y reduciendo errores humanos para mejorar la eficiencia operativa.',
    imageUrl: '/images/services/automation.jpg',
    features: [
      'Identificación de procesos manuales ineficientes',
      'Diseño de flujos de trabajo optimizados',
      'Implementación de soluciones tecnológicas',
      'Monitoreo y mejora continua'
    ],
    cta: {
      text: 'Solicitar información',
      url: '/contacto'
    }
  },
  {
    id: '2',
    title: 'Integración de Sistemas',
    description: 'Conecta tus aplicaciones existentes para crear flujos de trabajo sin interrupciones y maximizar el valor de tus inversiones en tecnología.',
    imageUrl: '/images/services/integration.jpg',
    features: [
      'Análisis de ecosistema tecnológico actual',
      'Diseño de arquitectura de integración',
      'Desarrollo de APIs y conectores personalizados',
      'Pruebas e implementación'
    ],
    cta: {
      text: 'Conocer más',
      url: '/contacto'
    }
  },
  {
    id: '3',
    title: 'Desarrollo a Medida',
    description: 'Soluciones personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio.',
    imageUrl: '/images/services/custom-dev.jpg',
    features: [
      'Levantamiento detallado de requerimientos',
      'Diseño de solución orientado a objetivos de negocio',
      'Desarrollo ágil con entregas incrementales',
      'Soporte y mantenimiento continuo'
    ],
    cta: {
      text: 'Agendar consulta',
      url: '/contacto'
    }
  }
];

// Mock Blog Posts
const mockBlogPosts = [
  {
    id: '1',
    title: 'Cómo la automatización de procesos puede reducir costos en un 30%',
    slug: 'automatizacion-reduce-costos',
    excerpt: 'Descubre cómo la implementación de soluciones de automatización puede generar ahorros significativos en tu empresa.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Phasellus faucibus velit a nulla fermentum, eget dictum risus tincidunt. Fusce fermentum enim vel neque commodo, vel pharetra metus finibus. Ut vel nisl id risus pharetra viverra eget ac sapien.',
    publishedAt: '2023-10-15',
    imageUrl: '/images/blog/cost-reduction.jpg',
    author: {
      name: 'Carlos Ramírez',
      avatar: '/images/team/carlos.jpg'
    },
    categories: ['Automatización', 'Eficiencia Operativa']
  },
  {
    id: '2',
    title: '5 señales de que tu negocio necesita integrar sus sistemas',
    slug: 'senales-integracion-sistemas',
    excerpt: 'Identificar el momento adecuado para integrar los sistemas de tu empresa puede marcar la diferencia en tu crecimiento.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Phasellus faucibus velit a nulla fermentum, eget dictum risus tincidunt. Fusce fermentum enim vel neque commodo, vel pharetra metus finibus. Ut vel nisl id risus pharetra viverra eget ac sapien.',
    publishedAt: '2023-09-28',
    imageUrl: '/images/blog/integration-signs.jpg',
    author: {
      name: 'Laura Torres',
      avatar: '/images/team/laura.jpg'
    },
    categories: ['Integración', 'Sistemas']
  },
  {
    id: '3',
    title: 'La importancia de la transformación digital en PYMES',
    slug: 'transformacion-digital-pymes',
    excerpt: 'Incluso las pequeñas empresas pueden beneficiarse enormemente de adoptar tecnologías digitales adaptadas a sus necesidades.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Phasellus faucibus velit a nulla fermentum, eget dictum risus tincidunt. Fusce fermentum enim vel neque commodo, vel pharetra metus finibus. Ut vel nisl id risus pharetra viverra eget ac sapien.',
    publishedAt: '2023-09-10',
    imageUrl: '/images/blog/digital-transformation.jpg',
    author: {
      name: 'Miguel Sánchez',
      avatar: '/images/team/miguel.jpg'
    },
    categories: ['Transformación Digital', 'PYMES']
  }
];

// Mock Purpose Content
const purposeContent = {
  title: 'Nuestro Propósito',
  description: 'En Automatizalo.pe nuestra misión es empoderar a las empresas peruanas mediante la implementación de soluciones tecnológicas que automatizan procesos, mejoran la eficiencia y generan valor real. Creemos que toda organización, independientemente de su tamaño, merece acceso a herramientas que impulsen su crecimiento y competitividad.',
  vision: 'Aspiramos a ser el referente en soluciones de automatización e integración en el Perú, contribuyendo al desarrollo tecnológico del país y al éxito sostenible de nuestros clientes.',
  values: [
    {
      title: 'Innovación',
      description: 'Buscamos constantemente nuevas y mejores formas de resolver los retos de nuestros clientes.'
    },
    {
      title: 'Excelencia',
      description: 'Nos comprometemos con los más altos estándares de calidad en cada proyecto que emprendemos.'
    },
    {
      title: 'Colaboración',
      description: 'Trabajamos estrechamente con nuestros clientes, convirtiéndonos en una extensión de sus equipos.'
    },
    {
      title: 'Adaptabilidad',
      description: 'Diseñamos soluciones flexibles que evolucionan con las necesidades cambiantes de los negocios.'
    }
  ],
  team: [
    {
      id: '1',
      name: 'Carlos Ramírez',
      role: 'CEO & Fundador',
      bio: 'Con más de 15 años de experiencia en desarrollo de software y automatización, Carlos fundó Automatizalo.pe con la visión de democratizar el acceso a la tecnología para empresas de todos los tamaños.',
      imageUrl: '/images/team/carlos.jpg'
    },
    {
      id: '2',
      name: 'Laura Torres',
      role: 'CTO',
      bio: 'Ingeniera de sistemas con especialización en arquitectura de software, Laura lidera el desarrollo técnico de todas nuestras soluciones.',
      imageUrl: '/images/team/laura.jpg'
    },
    {
      id: '3',
      name: 'Miguel Sánchez',
      role: 'Director de Operaciones',
      bio: 'Especialista en optimización de procesos, Miguel se asegura de que cada implementación se realice con la máxima eficiencia y valor para el cliente.',
      imageUrl: '/images/team/miguel.jpg'
    }
  ]
};

module.exports = {
  mockServices,
  mockBlogPosts,
  purposeContent
}; 
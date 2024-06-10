import ArticleImg1 from '~/assets/pexels-1.webp'
import ArticleImg2 from '~/assets/pexels-2.webp'
import ArticleImg3 from '~/assets/pexels-3.webp'
import ArticleImg4 from '~/assets/pexels-4.webp'
import ArticleImg5 from '~/assets/pexels-5.webp'

export const articles = [{
  id: '1',
  img: ArticleImg1,
  category: 'Technology',
  title: 'New Python Version 3.10 Released',
  description: 'Python 3.10 brings new syntax features like structural pattern matching and better error messages, aiming to enhance developer productivity and code readability.',
  longText: 'The Python Software Foundation has officially released Python 3.10, bringing a host of new features and optimizations to the beloved programming language. This latest version introduces structural pattern matching, a significant addition that enables more readable and maintainable code by allowing developers to match complex data structures in a clear and concise manner. Additionally, Python 3.10 enhances error messages, making it easier for developers to identify and fix issues in their code. Performance improvements are also a key highlight, with several under-the-hood changes designed to make Python faster and more efficient. Other notable features include precise line numbers in traceback, parenthesized context managers, and more expressive syntax options. The release is a testament to the ongoing commitment of the Python community to evolve and improve the language, ensuring it remains a top choice for developers in various fields, from web development to scientific computing. Developers are encouraged to upgrade to Python 3.10 to take full advantage of these new capabilities and enhancements. Comprehensive documentation and upgrade guides are available to facilitate a smooth transition.',
  author: 'Scarlet Mour',
  date: 'June 1, 2024',
}, {
  id: '2',
  img: ArticleImg2,
  category: 'Technology',
  title: 'GitHub Introduces AI-Powered Code Review Tool',
  description: 'GitHub\'s new AI-powered tool helps developers review code by providing intelligent suggestions and detecting potential issues, streamlining the development process',
  longText: 'GitHub, the world\'s leading software development platform, has introduced an innovative AI-powered code review tool designed to enhance the efficiency and accuracy of code reviews. Leveraging advanced machine learning algorithms, this tool provides developers with intelligent suggestions and highlights potential issues in the codebase, such as bugs, security vulnerabilities, and performance bottlenecks. The AI engine has been trained on a vast dataset of open-source projects, enabling it to understand common coding patterns and best practices. By automating parts of the code review process, GitHub aims to reduce the burden on human reviewers, allowing them to focus on more complex and nuanced aspects of the code. This tool not only accelerates the review cycle but also helps maintain high standards of code quality and consistency across projects. It is integrated seamlessly into the GitHub workflow, ensuring a smooth user experience for developers. Early adopters have reported significant improvements in their development workflows, praising the tool for its accuracy and helpfulness. GitHub continues to refine and expand the capabilities of this tool based on user feedback, with plans for future enhancements and features.',
  author: 'John Doe',
  date: 'May 28, 2024',
}, {
  id: '3',
  img: ArticleImg3,
  category: 'Technology',
  title: 'JavaScript Framework React 18 Now Available',
  description: 'React 18 includes significant improvements in concurrent rendering and automatic batching, enhancing both performance and the developer experience.',
  longText: 'The React team has announced the official release of React 18, the latest version of the widely-used JavaScript library for building user interfaces. This update introduces several new features and improvements aimed at enhancing both performance and developer experience. One of the key highlights is the introduction of concurrent rendering, which allows React to prepare multiple versions of the UI at the same time, leading to smoother and more responsive applications. This is particularly beneficial for complex applications with heavy user interactions. Additionally, React 18 includes automatic batching of updates, reducing the number of re-renders and improving overall performance. The new version also brings improvements to server-side rendering and introduces new hooks, such as useTransition and useDeferredValue, which give developers more control over rendering behavior. The React team has worked closely with the community to ensure a smooth upgrade path, providing detailed documentation and migration guides. With React 18, developers can build more interactive and performant web applications, pushing the boundaries of what’s possible with modern web development. The update reaffirms React’s position as a leading choice for developers looking to create dynamic and efficient user interfaces.',
  author: 'Emily Johnson',
  date: 'June 3, 2024'
}, 
{
  id: '4',
  img: ArticleImg4,
  category: 'Technology',
  title: 'Google Announces New Dart Language Features',
  description: 'Google\'s latest Dart update introduces enhanced performance features and improved developer tools, making it easier to build fast and efficient applications.',
  longText: 'Google has announced a major update to Dart, its open-source programming language optimized for client-side development. The latest version introduces several new features designed to improve performance, developer productivity, and the overall development experience. Among the key enhancements is improved null safety, which helps prevent common programming errors related to null references by making nullability explicit in the type system. This feature aims to enhance code reliability and maintainability. The update also includes performance optimizations, such as faster compilation times and reduced memory usage, making Dart applications run more efficiently. Additionally, new developer tools and improved integration with popular IDEs, like Visual Studio Code, are part of this release, providing a more seamless and productive development environment. Google continues to invest in Dart to make it a premier language for building fast, high-quality applications, especially in conjunction with its Flutter framework. The update is expected to be well-received by the Dart and Flutter communities, offering them powerful new tools to create exceptional user experiences. Developers are encouraged to explore the new features and integrate them into their projects.',
  author: 'Michael Brown',
  date: 'June 4, 2024'
}, {
  id: '5',
  img: ArticleImg5,
  category: 'Technology',
  title: 'AWS Launches New Serverless Application Model',
  description: 'AWS\'s new Serverless Application Model (SAM) aims to simplify the process of building and deploying serverless applications, offering developers a more streamlined workflow.',
  longText: 'Amazon Web Services (AWS) has launched a new version of its Serverless Application Model (SAM), aimed at simplifying the process of building and deploying serverless applications. This updated SAM framework includes several new features designed to streamline development workflows and enhance productivity. Key improvements include more intuitive configuration options, enhanced local development capabilities, and better integration with AWS\'s suite of serverless services, such as Lambda and API Gateway. The new SAM also introduces simplified deployment processes, reducing the complexity and time required to push updates to production. Additionally, AWS has enhanced the debugging and monitoring tools available within SAM, making it easier for developers to identify and resolve issues quickly. With these updates, AWS aims to make serverless application development more accessible and efficient, empowering developers to build scalable and reliable applications without managing infrastructure. The launch is part of AWS\'s ongoing commitment to innovation in cloud computing, providing developers with the tools they need to leverage the full potential of serverless architectures. Detailed documentation and examples are available to help developers get started with the new SAM.',
  author: 'Sarah Lee',
  date: 'June 2, 2024'
}
]

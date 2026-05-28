import AdobeXdIcon from '@/components/icons/tech/AdobeXdIcon.vue'
import BitBucketIcon from '@/components/icons/tech/BitBucketIcon.vue'
import BootstrapIcon from '@/components/icons/tech/BootstrapIcon.vue'
import BrowserStackIcon from '@/components/icons/tech/BrowserStackIcon.vue'
import ConfluenceIcon from '@/components/icons/tech/ConfluenceIcon.vue'
import ContentfulIcon from '@/components/icons/tech/ContentfulIcon.vue'
import Css3Icon from '@/components/icons/tech/Css3Icon.vue'
import DigitalOceanIcon from '@/components/icons/tech/DigitalOceanIcon.vue'
import DjangoIcon from '@/components/icons/tech/DjangoIcon.vue'
import DockerIcon from '@/components/icons/tech/DockerIcon.vue'
import EsLintIcon from '@/components/icons/tech/EsLintIcon.vue'
import ExpressIcon from '@/components/icons/tech/ExpressIcon.vue'
import FigmaIcon from '@/components/icons/tech/FigmaIcon.vue'
import FirebaseIcon from '@/components/icons/tech/FirebaseIcon.vue'
import GitHubIcon from '@/components/icons/tech/GitHubIcon.vue'
import GitIcon from '@/components/icons/tech/GitIcon.vue'
import GitLabIcon from '@/components/icons/tech/GitLabIcon.vue'
import GsapIcon from '@/components/icons/tech/GsapIcon.vue'
import GulpJsIcon from '@/components/icons/tech/GulpJsIcon.vue'
import HandlebarsIcon from '@/components/icons/tech/HandlebarsIcon.vue'
import Html5Icon from '@/components/icons/tech/Html5Icon.vue'
import JavaScriptIcon from '@/components/icons/tech/JavaScriptIcon.vue'
import JestIcon from '@/components/icons/tech/JestIcon.vue'
import JiraIcon from '@/components/icons/tech/JiraIcon.vue'
import JQueryIcon from '@/components/icons/tech/JQueryIcon.vue'
import JsonIcon from '@/components/icons/tech/JsonIcon.vue'
import MongoDbIcon from '@/components/icons/tech/MongoDbIcon.vue'
import MongooseJsIcon from '@/components/icons/tech/MongooseJsIcon.vue'
import NextJsIcon from '@/components/icons/tech/NextJsIcon.vue'
import NodeJsIcon from '@/components/icons/tech/NodeJsIcon.vue'
import NodemonIcon from '@/components/icons/tech/NodemonIcon.vue'
import NpmIcon from '@/components/icons/tech/NpmIcon.vue'
import NuxtJsIcon from '@/components/icons/tech/NuxtJsIcon.vue'
import PiniaIcon from '@/components/icons/tech/PiniaIcon.vue'
import PostmanIcon from '@/components/icons/tech/PostmanIcon.vue'
import PugIcon from '@/components/icons/tech/PugIcon.vue'
import ReactIcon from '@/components/icons/tech/ReactIcon.vue'
import ReduxIcon from '@/components/icons/tech/ReduxIcon.vue'
import RollupJsIcon from '@/components/icons/tech/RollupJsIcon.vue'
import SassIcon from '@/components/icons/tech/SassIcon.vue'
import ShadcnVueIcon from '@/components/icons/tech/ShadcnVueIcon.vue'
import SketchIcon from '@/components/icons/tech/SketchIcon.vue'
import StrapiIcon from '@/components/icons/tech/StrapiIcon.vue'
import SwaggerIcon from '@/components/icons/tech/SwaggerIcon.vue'
import TailwindCssIcon from '@/components/icons/tech/TailwindCssIcon.vue'
import TrelloIcon from '@/components/icons/tech/TrelloIcon.vue'
import TypeScriptIcon from '@/components/icons/tech/TypeScriptIcon.vue'
import VercelIcon from '@/components/icons/tech/VercelIcon.vue'
import VitestIcon from '@/components/icons/tech/VitestIcon.vue'
import ViteJsIcon from '@/components/icons/tech/ViteJsIcon.vue'
import VsCodeIcon from '@/components/icons/tech/VsCodeIcon.vue'
import VueJsIcon from '@/components/icons/tech/VueJsIcon.vue'
import VuetifyIcon from '@/components/icons/tech/VuetifyIcon.vue'
import WebflowIcon from '@/components/icons/tech/WebflowIcon.vue'
import WebpackIcon from '@/components/icons/tech/WebpackIcon.vue'
import WordPressIcon from '@/components/icons/tech/WordPressIcon.vue'
import XmlIcon from '@/components/icons/tech/XmlIcon.vue'
import YarnIcon from '@/components/icons/tech/YarnIcon.vue'

export enum Tech {
  ADOBE_XD,
  BITBUCKET,
  BOOTSTRAP,
  BROWSER_STACK,
  CONFLUENCE,
  CONTENTFUL,
  CSS3,
  DIGITAL_OCEAN,
  DJANGO,
  DOCKER,
  ESLINT,
  EXPRESS,
  FIGMA,
  FIREBASE,
  GIT,
  GITHUB,
  GITLAB,
  GSAP,
  GULP_JS,
  HANDLEBARS,
  HTML5,
  JAVASCRIPT,
  JEST,
  JIRA,
  JQUERY,
  JSON,
  MONGODB,
  MONGOOSE_JS,
  NEXT_JS,
  NODE_JS,
  NODEMON,
  NPM,
  NUXT,
  PINIA,
  POSTMAN,
  PUG,
  REACT,
  REDUX,
  ROLLUP_JS,
  SASS,
  SHADCN_VUE,
  SKETCH,
  STRAPI,
  SWAGGER,
  TAILWIND_CSS,
  TRELLO,
  TYPESCRIPT,
  VERCEL,
  VITE_JS,
  VITEST,
  VS_CODE,
  VUE,
  VUETIFY,
  WEBFLOW,
  WEBPACK,
  WORDPRESS,
  XML,
  YARN,
}

export const techTitles: Record<Tech, string> = {
  [Tech.ADOBE_XD]: 'Adobe XD',
  [Tech.BITBUCKET]: 'Bitbucket',
  [Tech.BOOTSTRAP]: 'Bootstrap',
  [Tech.BROWSER_STACK]: 'BrowserStack',
  [Tech.CONFLUENCE]: 'Confluence',
  [Tech.CONTENTFUL]: 'Contentful',
  [Tech.CSS3]: 'CSS3',
  [Tech.DIGITAL_OCEAN]: 'DigitalOcean',
  [Tech.DJANGO]: 'Django Template Language',
  [Tech.DOCKER]: 'Docker',
  [Tech.ESLINT]: 'ESLint',
  [Tech.EXPRESS]: 'Express',
  [Tech.FIGMA]: 'Figma',
  [Tech.FIREBASE]: 'Firebase',
  [Tech.GIT]: 'Git',
  [Tech.GITHUB]: 'GitHub',
  [Tech.GITLAB]: 'GitLab',
  [Tech.GSAP]: 'GSAP',
  [Tech.GULP_JS]: 'Gulp.js',
  [Tech.HANDLEBARS]: 'Handlebars',
  [Tech.HTML5]: 'HTML5',
  [Tech.JAVASCRIPT]: 'JavaScript',
  [Tech.JEST]: 'Jest',
  [Tech.JIRA]: 'Jira',
  [Tech.JQUERY]: 'jQuery',
  [Tech.JSON]: 'JSON',
  [Tech.MONGODB]: 'MongoDB',
  [Tech.MONGOOSE_JS]: 'Mongoose.js',
  [Tech.NEXT_JS]: 'Next.js',
  [Tech.NODE_JS]: 'Node.js',
  [Tech.NODEMON]: 'Nodemon',
  [Tech.NPM]: 'npm',
  [Tech.NUXT]: 'Nuxt 4',
  [Tech.PINIA]: 'Pinia',
  [Tech.POSTMAN]: 'Postman',
  [Tech.PUG]: 'Pug',
  [Tech.REACT]: 'React',
  [Tech.REDUX]: 'Redux',
  [Tech.ROLLUP_JS]: 'Rollup.js',
  [Tech.SASS]: 'SASS',
  [Tech.SHADCN_VUE]: 'ShadCn-Vue',
  [Tech.SKETCH]: 'Sketch',
  [Tech.STRAPI]: 'Strapi',
  [Tech.SWAGGER]: 'Swagger',
  [Tech.TAILWIND_CSS]: 'Tailwind CSS',
  [Tech.TRELLO]: 'Trello',
  [Tech.TYPESCRIPT]: 'TypeScript',
  [Tech.VERCEL]: 'Vercel',
  [Tech.VITE_JS]: 'Vite.js',
  [Tech.VITEST]: 'Vitest',
  [Tech.VS_CODE]: 'VSCode',
  [Tech.VUE]: 'Vue 3',
  [Tech.VUETIFY]: 'Vuetify',
  [Tech.WEBFLOW]: 'Webflow',
  [Tech.WEBPACK]: 'Webpack',
  [Tech.WORDPRESS]: 'WordPress',
  [Tech.XML]: 'XML',
  [Tech.YARN]: 'Yarn',
}

export const techIcons: Record<Tech, Component> = {
  [Tech.ADOBE_XD]: AdobeXdIcon,
  [Tech.BITBUCKET]: BitBucketIcon,
  [Tech.BOOTSTRAP]: BootstrapIcon,
  [Tech.BROWSER_STACK]: BrowserStackIcon,
  [Tech.CONFLUENCE]: ConfluenceIcon,
  [Tech.CONTENTFUL]: ContentfulIcon,
  [Tech.CSS3]: Css3Icon,
  [Tech.DIGITAL_OCEAN]: DigitalOceanIcon,
  [Tech.DJANGO]: DjangoIcon,
  [Tech.DOCKER]: DockerIcon,
  [Tech.ESLINT]: EsLintIcon,
  [Tech.EXPRESS]: ExpressIcon,
  [Tech.FIGMA]: FigmaIcon,
  [Tech.FIREBASE]: FirebaseIcon,
  [Tech.GIT]: GitIcon,
  [Tech.GITHUB]: GitHubIcon,
  [Tech.GITLAB]: GitLabIcon,
  [Tech.GSAP]: GsapIcon,
  [Tech.GULP_JS]: GulpJsIcon,
  [Tech.HANDLEBARS]: HandlebarsIcon,
  [Tech.HTML5]: Html5Icon,
  [Tech.JAVASCRIPT]: JavaScriptIcon,
  [Tech.JEST]: JestIcon,
  [Tech.JIRA]: JiraIcon,
  [Tech.JQUERY]: JQueryIcon,
  [Tech.JSON]: JsonIcon,
  [Tech.MONGODB]: MongoDbIcon,
  [Tech.MONGOOSE_JS]: MongooseJsIcon,
  [Tech.NEXT_JS]: NextJsIcon,
  [Tech.NODE_JS]: NodeJsIcon,
  [Tech.NODEMON]: NodemonIcon,
  [Tech.NPM]: NpmIcon,
  [Tech.NUXT]: NuxtJsIcon,
  [Tech.PINIA]: PiniaIcon,
  [Tech.POSTMAN]: PostmanIcon,
  [Tech.PUG]: PugIcon,
  [Tech.REACT]: ReactIcon,
  [Tech.REDUX]: ReduxIcon,
  [Tech.ROLLUP_JS]: RollupJsIcon,
  [Tech.SASS]: SassIcon,
  [Tech.SHADCN_VUE]: ShadcnVueIcon,
  [Tech.SKETCH]: SketchIcon,
  [Tech.STRAPI]: StrapiIcon,
  [Tech.SWAGGER]: SwaggerIcon,
  [Tech.TAILWIND_CSS]: TailwindCssIcon,
  [Tech.TRELLO]: TrelloIcon,
  [Tech.TYPESCRIPT]: TypeScriptIcon,
  [Tech.VERCEL]: VercelIcon,
  [Tech.VITE_JS]: ViteJsIcon,
  [Tech.VITEST]: VitestIcon,
  [Tech.VS_CODE]: VsCodeIcon,
  [Tech.VUE]: VueJsIcon,
  [Tech.VUETIFY]: VuetifyIcon,
  [Tech.WEBFLOW]: WebflowIcon,
  [Tech.WEBPACK]: WebpackIcon,
  [Tech.WORDPRESS]: WordPressIcon,
  [Tech.XML]: XmlIcon,
  [Tech.YARN]: YarnIcon,
}

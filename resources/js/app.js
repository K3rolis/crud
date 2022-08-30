import './bootstrap';

// include css file
import '../css/app.css';

// For Vue.js
import { createApp, onMounted } from 'vue/dist/vue.esm-bundler';
import LaravelVuePagination from 'laravel-vue-pagination';
import router from './routes/index.js';
import VueSweetalert2 from 'vue-sweetalert2';
import useAuth from './composables/auth';
import { abilitiesPlugin} from "@casl/vue";
import ability from './services/ability';


const app = createApp({
    setup() {
        const { getUser } = useAuth()
        onMounted(getUser)
    }
})
app.use(router)
app.use(VueSweetalert2)
app.use(abilitiesPlugin, ability)
// app.component('posts-index', PostIndex)
app.component('Pagination', LaravelVuePagination);
app.mount('#app')

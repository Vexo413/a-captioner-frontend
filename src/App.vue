<template>
    <div id="app">
        <nav class="main-nav">
            <div class="nav-content">
                <div class="logo">
                    <span class="brand">A-Captioner</span>
                </div>
                <div class="nav-links">
                    <router-link to="/" exact-active-class="active"
                        >Home</router-link
                    >
                    <router-link to="/demo" exact-active-class="active"
                        >Demo</router-link
                    >
                </div>
            </div>
        </nav>
        <main class="main-content">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style scoped>
#app {
    font-family: "Segoe UI", Arial, sans-serif;
    background: #f7f9fa;
    color: #222;
    min-height: 100vh;
    margin: 0;
}

.main-nav {
    background: linear-gradient(90deg, #4f8cff 0%, #a6e1fa 100%);
    box-shadow: 0 4px 24px rgba(79, 140, 255, 0.08);
    padding: 0;
    margin: 0;
    border-radius: 0 0 2vh 2vh;
}

.nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0.7em 2em;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.7em;
}

.logo img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.brand {
    font-size: 1.3em;
    font-weight: bold;
    color: #fff;
    letter-spacing: 0.03em;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.nav-links {
    display: flex;
    gap: 1.5em;
}

.nav-links a {
    font-weight: 500;
    color: #e3f2fd;
    text-decoration: none;
    font-size: 1.08em;
    padding: 0.3em 1.1em;
    border-radius: 2em;
    transition:
        background 0.18s,
        color 0.18s;
}

.nav-links a.active,
.nav-links a.router-link-exact-active {
    background: #fff;
    color: #4f8cff;
    font-weight: bold;
    box-shadow: 0 2px 8px rgba(79, 140, 255, 0.08);
}

.nav-links a:hover {
    background: #4f8cff;
    color: #fff;
}

.main-content {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem 1rem 1.5rem 1rem;
    min-height: 80vh;
    text-align: center;
}
</style>

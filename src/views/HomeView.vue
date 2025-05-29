<template>
<<<<<<< HEAD
    <div class="home">
        <section class="hero">
            <div class="hero-content">
                <div>
                    <h1>A-Captioner</h1>
                    <h2>See the World, No Matter What</h2>
                    <p>
                        The A-Captioner is a revolutionary accessibility device
                        that empowers the blind and visually impaired to explore
                        their surroundings with confidence and independence.
                    </p>
                </div>
            </div>
        </section>

        <section class="features">
            <h3>Why A-Captioner?</h3>
            <ul>
                <li>
                    <strong>Wearable & Lightweight:</strong> Worn around your
                    neck, as light as a necklace.
                </li>
                <li>
                    <strong>AI-Powered:</strong> Scans your environment and
                    describes what it sees.
                </li>
                <li>
                    <strong>Interactive:</strong> Ask follow-up questions about
                    anything.
                </li>
                <li>
                    <strong>Reliable & Fast:</strong> Works without WiFi or
                    cellular connection.
                </li>
                <li>
                    <strong>Affordable:</strong> Only costs $119.99, with no
                    subscriptions
                </li>
            </ul>
        </section>

        <section class="demo">
            <h3>See It In Action</h3>
            <div class="demo-content">
                <div class="demo-text">
                    <p>
                        Try our interactive demo below! Show an object to your
                        webcam and ask questions like:
                    </p>
                    <ul>
                        <li>“Describe what you see.”</li>
                        <li>“What is the title of the book?”</li>
                    </ul>
                    <a href="#demo" class="cta-button secondary"
                        >Try the Demo</a
                    >
                </div>
            </div>
        </section>

        <section class="sales">
            <h3>Join 1000+ Happy Users</h3>
            <p>
                Over 1000 units sold last year. Be part of the movement to make
                the world more accessible!
            </p>
        </section>
    </div>
=======
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <div>
          <h1>A-Captioner</h1>
          <h2>See the World, No Matter What</h2>
          <p>
            The A-Captioner is a revolutionary accessibility device that empowers the blind and
            visually impaired to explore their surroundings with confidence and independence.
          </p>
        </div>
      </div>
    </section>

    <section class="features">
      <h3>Why A-Captioner?</h3>
      <ul>
        <li>
          <strong>Wearable & Lightweight:</strong> Worn around your neck, as light as a necklace.
        </li>
        <li><strong>AI-Powered:</strong> Scans your environment and describes what it sees.</li>
        <li><strong>Interactive:</strong> Ask follow-up questions about anything.</li>
        <li><strong>Reliable & Fast:</strong> Works without WiFi or cellular connection.</li>
        <li><strong>Affordable:</strong> Only costs $119.99, with no subscriptions</li>
      </ul>
    </section>

    <section class="demo">
      <h3>See It In Action</h3>
      <div class="demo-content">
        <div class="demo-text">
          <p>
            Try our interactive demo below! Show an object to your webcam and ask questions like:
          </p>
          <ul>
            <li>“Describe what you see.”</li>
            <li>“What is the title of the book?”</li>
          </ul>
          <a href="#demo" class="cta-button secondary">Try the Demo</a>
        </div>
      </div>
    </section>

    <section class="sales">
      <h3>Join 1000+ Happy Users</h3>
      <p>
        Over 1000 units sold last year. Be part of the movement to make the world more accessible!
      </p>
    </section>
  </div>
>>>>>>> 37f07d5 (Initial commit)
</template>

<script>
export default {
<<<<<<< HEAD
    name: "HomeView",
};
=======
  name: 'HomeView',
}
>>>>>>> 37f07d5 (Initial commit)
</script>

<style scoped>
.home {
<<<<<<< HEAD
    font-family: "Segoe UI", Arial, sans-serif;
    background: #f7f9fa;
    color: #222;
    padding: 2%;
    margin: 0;
}

.hero {
    background: linear-gradient(90deg, #4f8cff 0%, #a6e1fa 100%);
    padding: 40px 0 30px 0;
    height: 70vh;
    border-radius: 2vh;
    margin-bottom: 32px;
    box-shadow: 0 4px 24px rgba(79, 140, 255, 0.08);
    background-image: url("../assets/A-Captioner.png");
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.hero-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    max-width: 900px;
    margin: 0 auto;
    flex-wrap: wrap;
}

.hero h1 {
    font-size: 2.8rem;
    margin-bottom: 0.2em;
    color: #fff;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.hero h2 {
    font-size: 1.4rem;
    color: #e3f2fd;
    margin-bottom: 1em;
}

.hero p {
    font-size: 1.1rem;
    color: #f0f8ff;
    margin-bottom: 1.5em;
}

.cta-button {
    display: inline-block;
    background: #222;
    color: #fff;
    padding: 0.8em 2em;
    border-radius: 2em;
    font-weight: bold;
    text-decoration: none;
    transition: background 0.2s;
    margin-top: 0.5em;
}

.cta-button.secondary {
    background: #4f8cff;
    color: #fff;
}

.cta-button:hover {
    background: #4f8cff;
    color: #fff;
}

.features {
    max-width: 700px;
    margin: 0 auto 32px auto;
    background: #fff;
    border-radius: 1.5vh;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    padding: 32px 24px;
}

.features h3 {
    font-size: 1.5rem;
    margin-bottom: 1em;
    color: #4f8cff;
}

.features ul {
    list-style: none;
    padding: 0;
}

.features li {
    margin-bottom: 1em;
    font-size: 1.08rem;
    padding-left: 1.2em;
    position: relative;
}

.features li:before {
    content: "✔";
    color: #4f8cff;
    position: absolute;
    left: 0;
    font-size: 1.1em;
}

.demo {
    max-width: 900px;
    margin: 0 auto 32px auto;
    background: #e3f2fd;
    border-radius: 1.5vh;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    padding: 32px 24px;
}

.demo-content {
    display: flex;
    align-items: center;
    gap: 32px;
    flex-wrap: wrap;
}

.demo-image {
    width: 320px;
    height: 180px;
    border-radius: 1vh;
    object-fit: cover;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.demo-text {
    flex: 1;
}

.demo-text ul {
    margin: 0.5em 0 1em 1.2em;
    padding: 0;
}

.sales {
    text-align: center;
    margin: 40px auto 0 auto;
    max-width: 600px;
    background: #fff;
    border-radius: 1.5vh;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    padding: 32px 24px;
}

.sales h3 {
    color: #4f8cff;
    margin-bottom: 0.5em;
=======
  font-family: 'Segoe UI', Arial, sans-serif;
  background: #f7f9fa;
  color: #222;
  padding: 2%;
  margin: 0;
}

.hero {
  background: linear-gradient(90deg, #4f8cff 0%, #a6e1fa 100%);
  padding: 40px 0 30px 0;
  height: 70vh;
  border-radius: 2vh;
  margin-bottom: 32px;
  box-shadow: 0 4px 24px rgba(79, 140, 255, 0.08);
  background-image: url('../assets/A-Captioner.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.hero h1 {
  font-size: 2.8rem;
  margin-bottom: 0.2em;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.hero h2 {
  font-size: 1.4rem;
  color: #e3f2fd;
  margin-bottom: 1em;
}

.hero p {
  font-size: 1.1rem;
  color: #f0f8ff;
  margin-bottom: 1.5em;
}

.cta-button {
  display: inline-block;
  background: #222;
  color: #fff;
  padding: 0.8em 2em;
  border-radius: 2em;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.2s;
  margin-top: 0.5em;
}

.cta-button.secondary {
  background: #4f8cff;
  color: #fff;
}

.cta-button:hover {
  background: #4f8cff;
  color: #fff;
}

.features {
  max-width: 700px;
  margin: 0 auto 32px auto;
  background: #fff;
  border-radius: 1.5vh;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 32px 24px;
}

.features h3 {
  font-size: 1.5rem;
  margin-bottom: 1em;
  color: #4f8cff;
}

.features ul {
  list-style: none;
  padding: 0;
}

.features li {
  margin-bottom: 1em;
  font-size: 1.08rem;
  padding-left: 1.2em;
  position: relative;
}

.features li:before {
  content: '✔';
  color: #4f8cff;
  position: absolute;
  left: 0;
  font-size: 1.1em;
}

.demo {
  max-width: 900px;
  margin: 0 auto 32px auto;
  background: #e3f2fd;
  border-radius: 1.5vh;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 32px 24px;
}

.demo-content {
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
}

.demo-image {
  width: 320px;
  height: 180px;
  border-radius: 1vh;
  object-fit: cover;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.demo-text {
  flex: 1;
}

.demo-text ul {
  margin: 0.5em 0 1em 1.2em;
  padding: 0;
  list-style: none;
}

.sales {
  text-align: center;
  margin: 40px auto 0 auto;
  max-width: 600px;
  background: #fff;
  border-radius: 1.5vh;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 32px 24px;
}

.sales h3 {
  color: #4f8cff;
  margin-bottom: 0.5em;
>>>>>>> 37f07d5 (Initial commit)
}
</style>

<template>
  <div class="container pt-5 pb-5">
    <div class="row">
      <div class="col-lg-7 mx-auto">
        <article class="blog-post">
          <h1 class="post-title">Form validation using Vue.js 3</h1>
          <div class="text-muted d-flex justify-content-between">
            <div>
              <span>Nov 12</span><span class="dot"></span>
              <span>5 min read</span> <span class="dot"></span>
            </div>
            <div class="action">
              <button>
                <img src="/assets/bookmark-plus.svg" class="icon" alt="" />
              </button>
            </div>
          </div>
          <div class="post-image mt-4 mb-5">
            <img
              src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dnVlLmpzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              class="image-fluid"
            />
          </div>
          <div class="post-content">
            <p>
              This blog post shows a few different types of content that’s
              supported and styled with Bootstrap. Basic typography, lists,
              tables, images, code, and more are all supported as expected.
            </p>
            <p>
              This is some additional paragraph placeholder content. It has been
              written to fill the available space and show how a longer snippet
              of text affects the surrounding content. We'll repeat it often to
              keep the demonstration flowing, so be on the lookout for this
              exact same string of text.
            </p>
            <p>
              This is some additional paragraph placeholder content. It has been
              written to fill the available space and show how a longer snippet
              of text affects the surrounding content. We'll repeat it often to
              keep the demonstration flowing, so be on the lookout for this
              exact same string of text.
            </p>
            <h3>Example lists</h3>
            <p>
              This is some additional paragraph placeholder content. It's a
              slightly shorter version of the other highly repetitive body text
              used throughout. This is an example unordered list:
            </p>
            <ul>
              <li>First list item</li>
              <li>Second list item with a longer description</li>
              <li>Third list item to close it out</li>
            </ul>
            <p>
              This is some additional paragraph placeholder content. It has been
              written to fill the available space and show how a longer snippet
              of text affects the surrounding content. We'll repeat it often to
              keep the demonstration flowing, so be on the lookout for this
              exact same string of text.
            </p>
            <h3>Sub-heading</h3>
            <p>
              This is some additional paragraph placeholder content. It has been
              written to fill the available space and show how a longer snippet
              of text affects the surrounding content. We'll repeat it often to
              keep the demonstration flowing, so be on the lookout for this
              exact same string of text.
            </p>
            <pre><code>Example code block</code></pre>
            <p>
              This is some additional paragraph placeholder content. It's a
              slightly shorter version of the other highly repetitive body text
              used throughout.
            </p>
          </div>
          <div class="mt-5">
            <ul class="tags">
              <li><a href="#">Design</a></li>
              <li><a href="#">Productivity</a></li>
            </ul>
          </div>
          <hr class="my-4" />
          <div class="d-flex align-items-start">
            <div class="author-thumb pt-3">
              <img
                src="https://randomuser.me/api/portraits/women/29.jpg"
                alt=""
                class="rounded-circle"
              />
            </div>
            <div class="about-author p-3 d-flex flex-column">
              <span class="d-block text-uppercase text-muted text-small"
                >Written by</span
              >
              <div
                class="d-flex align-items-start justify-content-md-between mb-2"
              >
                <a href="#" class="author-link me-2">Alemnew Marie</a>
                <button class="btn btn-sm btn-secondary follow">Follow</button>
              </div>
              <div class="text-muted pe-md-5 bio">
                Can’t stop sharing my experience and knowledge with other
                people. I write my thoughts on startups, technology and
                marketing.
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div class="related mt-5">
      <h3>More from Tomar</h3>
      <hr class="my-4" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PostDetail",
};
</script>

<style scoped>
.post-content {
  font-family: Merriweather;
  font-size: 1.3rem;
  line-height: 1.8;
  color: rgba(0, 0, 0, 0.8);
}
.post-content p {
  margin: 0 0 1.5rem 0;
}
.post-image img {
  width: 100%;
}
.post-title {
  font-weight: 700;
  font-size: 3rem;
  margin-bottom: 1rem;
}
.blog-post-meta {
  margin-bottom: 1.25rem;
  color: #727272;
}
ul.tags {
  list-style: none;
  padding-left: 0;
}
ul.tags li {
  display: inline-block;
  font-size: 0.9rem;
  margin: 10px 10px 0 0;
}
ul.tags li a {
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.6);
  border-radius: 3px;
  padding: 5px 10px;
}
ul.tags li a:hover {
  background: rgba(0, 0, 0, 0.07);
  text-decoration: none;
}
.author-thumb img {
  width: 100%;
  height: 100%;
}
.author-link {
  color: #333;
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
}
.follow {
  padding: 4px 20px;
  border-radius: 15px;
}
.bio {
  font-size: 1.1rem;
}
.icon {
  width: 20px;
  height: 20px;
}
.action button {
  all: unset;
  padding: 5px;
  border-radius: 50%;
}
.action button:hover {
  cursor: pointer;
}
</style>
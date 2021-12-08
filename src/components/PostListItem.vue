<template>
  <div class="d-flex flex-column-reverse flex-md-row">
    <div class="col-md-9 g-0 h-md-250 position-relative">
      <div class="col p-3 pb-0 d-flex flex-column position-static">
        <div class="d-inline-block mb-1">
          <img
            src="https://randomuser.me/api/portraits/women/29.jpg"
            class="rounded-circle me-2 avatar"
            alt="@"
          />
          <a href="#" class="author-link">Alemnew Marie</a>
        </div>
        <router-link :to="{ name: 'post-detail' }" class="mb-1 lh-sm post-title"
          >Form validation using Vue.js 3</router-link
        >
        <router-link
          :to="{ name: 'post-detail' }"
          class="card-text mb-2 lh-base post-summary"
        >
          In this post we will see how can we validate a form data and show
          error messages ot the user before submitting.
        </router-link>
        <div class="mb-1 text-muted post-footer">
          <div>
            <span>Nov 12</span><span class="dot"></span><span>5 min read</span>
            <span class="dot"></span
            ><a class="category-btn" href="#">Programming</a>
          </div>
          <div class="action">
            <button>
              <img src="/assets/bookmark-plus.svg" class="icon" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3 mx-auto">
      <router-link :to="{ name: 'post-detail' }">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQCAYAAAByNR6YAAAQ0UlEQVR4nO3d21bT0MKG4XX/10ZLy0bZCVRABHeIVmiBzv/AXyVpCyl8Da7l0zGeI1MKTcbIa+bMzH9WVlYKAAA5/3npXwAA4H+NwAIACBNYAABhAgsAIExgAQCECSwAgDCBBQAQJrAAAMIEFgBAmMACAAgTWAAAYQILACBMYAEAhAksAIAwgQUAECawAADCBBYAQJjAAgAIE1gAAGECCwAgTGABAIQJLACAMIEFABAmsAAAwgQWAECYwAIACBNYAABhAgsAIExgAQCECSwAgDCBBQAQJrAAAMIEFgBAmMACAAgTWAAAYQILACBMYAEAhAksAIAwgQUAECawAADCBBYAQJjAAgAIE1gAAGECCwAgTGABAIQJLACAMIEFABAmsAAAwgQWAECYwAIACBNYAABhAgsAIExgAQCECSwAgDCBBQAQJrAAAMIEFgBAmMACAAgTWAAAYQILACBMYAEAhAksAIAwgQUAECawAADCBBYAQJjAAgAIE1gAAGECCwAgTGABAIQJLACAMIEFABAmsAAAwgQWAECYwAIACBNYAABhAgsAIExgAQCECSwAgDCBBQAQJrAAAMIEFgBAmMACAAgTWAAAYQILACBMYAEAhAksAIAwgQUAECawAADCBBYAQJjAAgAIE1gAAGECCwAgTGABAIQJLACAMIEFABAmsAAAwgQWAECYwAIACBNYAABhAgsAIExgAQCECSwAgDCBBQAQJrAAAMIEFgBAmMACAAgTWAAAYQILACBMYAEAhAksAIAwgQUAECawAADCBBYAQJjAAgAIE1gAAGECCwAgTGABAIQJLACAMIEFABAmsAAAwgQWAECYwAIACBNYAABhAgsAIExgAQCECSwAgDCBBQAQJrAAAMIEFgBAmMACAAgTWAAAYQILACBMYAEAhAksAIAwgQUAECawAADCBBYAQJjAAgAIE1gAAGECCwAgTGABAIQJLACAMIEFABAmsAAAwgQWAECYwAIACBNYAABhAgsAIExgAQCECSwAgDCBBQAQJrAAAMIEFgBAmMACAAgTWAAAYQILACBMYAEAhAksAIAwgQUAECawAADCBBYAQJjAAgAIE1gAAGECCwAgTGABAIQJLACAMIEFABAmsAAAwgQWAECYwAIACBNYAABhAgsA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YAEAhAksAIAwgQUAECawAADCBBYAQJjAAgAIE1gAAGECCwAgTGABAIQJLACAMIEFABAmsAAAwgQWAECYwAIACBNYAABhAgsAIExgAQCECSwAgDCBBQAQJrAAAMIEFgBAmMACAAgTWAAAYQILACBMYAEAhAksAIAwgQUAECawAADCBBYAQJjAAgAIE1gAAGECCwAgTGABAIQJLACAMIEFABAmsAAAwgQWAECYwAIACBNYAABhAgsAIExgAQCECSwAgDCBBQAQJrAAAMIEFgBAmMACAAgTWAAAYQILACBMYAEAhAksAIAwgQUAECawAADCBBYAQJjAAgAIE1gAAGECCwAgTGABAIQJLACAMIEFABAmsAAAwgQWAECYwAIACBNYAABhAgsAIExgAQCECSwAgDCBBQAQJrAAAMIEFgBAmMACAAgTWAAAYQILACBMYAEAhAksAIAwgQUAECawAADCBBYAQJjAAgAIE1gAAGECCwAgTGABAIQJLACAMIEFABAmsAAAwgQWAECYwAIACBNYAABhAgsAIExgAQCECSwAgDCBBQAQJrAAAMIEFgBAmMACAAgTWAAAYQILACBMYAEAhAksAIAwgQUAECawAADCBBYAQJjAAgAIE1gAAGECCwAgTGABAIQJLACAMIEFABAmsAAAwgQWAECYwAIACBNYAABhAgsAIExgAQCECSwAgDCBBQAQJrAAAMIEFgBAmMACAAgTWAAAYQILACBMYAEAhAksAIAwgQUAECawAADCBBYAQJjAAgAIE1gAAGECCwAgTGABAIQJLACAMIEFABAmsAAAwgQWAECYwAIACBNYAABhAgsAIExgAQCECSwAgDCBBQAQJrAAAMIEFgBAmMACAAgTWAAAYQILACBMYAEAhAksAIAwgQUAECawAADCBBYAQJjAAgAIE1gAAGECCwAgTGABAIQJLACAMIEFABAmsAAAwgQWAECYwAIACBNYAABhAgsAIOz/AERW24ml72rSAAAAAElFTkSuQmCC"
          class="post-image"
          alt=""
        />
      </router-link>
    </div>
  </div>
  <hr class="my-4" />
</template>

<script>
export default {
  name: "PostListItem",
};
</script>

<style scoped>
a {
  color: #111;
  text-decoration: none;
}
.avatar {
  width: 20px;
  height: 20px;
}
.post-title {
  font-weight: bold;
  font-size: 2rem;
}
.post-summary {
  color: #555;
  font-size: 1.1rem;
}
.post-image {
  max-width: 100%;
  height: 100%;
}
.post-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.category-btn {
  background: rgb(238, 238, 238);
  color: #444;
  border-radius: 10px;
  padding: 5px 8px;
  text-align: center;
  margin-right: 10px;
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
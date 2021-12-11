<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-lg-7 mx-auto">
        <form @submit.prevent="onSubmit">
          <div class="mb-3 d-flex align-items-end">
            <label for="inputCategory" class="form-label fw-bold me-2"
              >Category:</label
            >
            <select
              class="form-select category"
              aria-label="multiple select example"
            >
              <option selected>---------</option>
              <option value="1">Programming</option>
              <option value="2">Business</option>
              <option value="3">Web Development</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="inputTitle" class="form-label fw-bold">Title:</label>
            <input
              v-model="title"
              type="text"
              class="form-control"
              id="inputTitle"
              placeholder="Give your post a good title to attract reader's attention"
            />
          </div>
          <div class="mb-3">
            <label for="inputContent" class="form-label fw-bold"
              >Content:</label
            >
            <editor
              id="inputContent"
              placeholder="Write the content of the post here."
              api-key="4odpqx543wwblsha155m0zqiykqi1bsksh7ohhadgumzza25"
              v-model="content"
              :init="{
                height: 500,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen codesample',
                  'insertdatetime media table paste help wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | bold italic backcolor | blockquote link \
                  codesample | bullist numlist outdent indent | removeformat | preview',
                content_style:
                  'body { font-family:Helvetica,Arial,sans-serif; font-size:18px; }',
              }"
            />
          </div>
          <button type="submit" class="btn btn-primary m-2">Publish</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "PostForm",
  components: {
    Editor,
  },
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    onSubmit() {
      console.log("post created");
      console.log(this.title);
      console.log(this.content);
    },
  },
};
</script>

<style scoped>
.category {
  width: fit-content;
}
</style>
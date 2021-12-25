<template>
  <!-- <Form @submit="onsubmit">
    <div v-for="field in schema.fields" :key="field.name">
      <label :for="field.name">{{ field.label }}</label>
      <Field :as="field.as" :id="field.name" :name="field.name" />
      <ErrorMessage :name="field.name" />
    </div>
    <button>Submit</button>
  </Form> -->

  <Form @submit="onsubmit">
    <div
      v-for="{ as, name, label, children, ...attrs } in schema.fields"
      :key="name"
    >
      <p>{{ children }}</p>
      <label :for="name">{{ label }}</label>
      <Field :as="as" :id="name" :name="name" v-bind="attrs">
        <template v-if="children && children.length">
          <component
            v-for="({ tag, text, ...childAttrs }, idx) in children"
            :key="idx"
            :is="tag"
            v-bind="childAttrs"
          >
            {{ text }}
          </component>
        </template>
      </Field>
      <ErrorMessage :name="name" />
    </div>
    <button>Submit</button>
  </Form>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  name: "Test11",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    schema: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onsubmit(data) {
      console.log(data);
    },
  },
};
</script>

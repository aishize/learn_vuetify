<template>
  <v-container>
    <v-row>
      <v-col md="4" xs="4" sm="4" lg="4" class="d-flex justify-start">
        <v-color-picker v-model="color"></v-color-picker>
      </v-col>
      <v-spacer></v-spacer>
      <v-col md="8" xs="12" sm="12" lg="8" class="d-flex justify-end">
        <v-stage :config="configKonva">
          <v-layer>
          </v-layer>
        </v-stage>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data(){
    return {
    types: ["hex", "hexa", "rgba", "hsla", "hsva"],
    type: "hex",
    hex: "#FF00FF",
    hexa: "#FF00FFFF",
    rgba: { r: 255, g: 0, b: 255, a: 1 },
    hsla: { h: 300, s: 1, l: 0.5, a: 1 },
    hsva: { h: 300, s: 1, v: 1, a: 1 },
    configKonva: {
        width: 500,
        height: 400
      },
      configCircle: {
        x: 100,
        y: 100,
        radius: 70,
        fill: "coral",
        stroke: "grey",
        strokeWidth: 4
      }
    }
  },

  computed: {
    color: {
      get() {
        return this[this.type];
      },
      set(v) {
        this[this.type] = v;
      }
    },
    showColor() {
      if (typeof this.color === "string") return this.color;

      return JSON.stringify(
        Object.keys(this.color).reduce((color, key) => {
          color[key] = Number(this.color[key].toFixed(2));
          return color;
        }, {}),
        null,
        2
      );
    }
  }
};
</script>
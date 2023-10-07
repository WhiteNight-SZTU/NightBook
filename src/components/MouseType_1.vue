<template>
    <div id="cursor"></div>
</template>
  
  <style src="/src/assets/css/MouseType_1.css">
  </style>
  
  <script>
  export default {
    mounted() {
      this.setupCursor();
    },
    methods: {
      setupCursor() {
        const cursor = document.querySelector('#cursor');
        document.addEventListener('mousemove', (e) => {
          cursor.style.top = e.pageY + 'px';
          cursor.style.left = e.pageX + 'px';
        });
      },
    },
  };
  </script>
  
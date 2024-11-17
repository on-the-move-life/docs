window.onload = function () {
  // Function to load the selected YAML file
  function loadSwaggerUI(url) {
    window.ui = SwaggerUIBundle({
      url: url,
      dom_id: '#swagger-ui',
      deepLinking: true,
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset
      ],
      plugins: [
        SwaggerUIBundle.plugins.DownloadUrl
      ],
      layout: "StandaloneLayout"
    });
  }

  // Initial load with the default YAML file
  loadSwaggerUI("main-service.yaml");

  // Event listener to handle service selection changes
  document.getElementById("serviceSelector").addEventListener("change", function () {
    const selectedService = this.value;
    loadSwaggerUI(selectedService);
  });
};

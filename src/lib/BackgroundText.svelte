<!-- BackgroundText.svelte -->
<script lang=ts>
    let fontSize: number;
    let repeatedText = 'TOJI FUSHIGURO';
    let viewportWidth = 0;
    let viewportHeight = 0;
    let text = 'TOJI FUSHIGURO';
    let lineHeight = 5;
    // Function to calculate font size based on viewport width
    function calculateFontSize() {
      viewportWidth = window.innerWidth;
      viewportHeight = window.innerHeight;
      // You can adjust this formula as needed
      if (viewportWidth > 768) {fontSize = viewportWidth * 0.06;} // 5% of the viewport width
      else {fontSize = viewportWidth * 0.125;}
       // 2% of the viewport width
  
      // Calculate how many times the text can fit within the viewport height
      lineHeight = fontSize * 0.8; // Estimated line height
      const repeatTimes = Math.ceil(viewportHeight / lineHeight);
  
      // Generate the repeated text
      repeatedText = Array.from({ length: repeatTimes }, () => text).join('\n');
    }
  
    // Calculate font size initially and on window resize
    
    //check if in browser
    if (typeof window !== 'undefined'){
    window.addEventListener('resize', calculateFontSize);
    calculateFontSize();
    }
  </script>
  
  <style>
    /* Style the background text */
    .background-text {
      display: block;
      color: black;
      z-index: -1;
      opacity: 1; /* Adjust opacity as desired */
      overflow: hidden;
      pointer-events: none; /* Prevent text from interfering with content */
      white-space: pre; /* Preserve line breaks */
    }

  </style>
  
  <div class="background-text text-black w-full bg-background font-abhaya" style="font-size: {fontSize}px; line-height: {lineHeight}px;">
    <p class="text-center">{repeatedText}</p>
  </div>
  
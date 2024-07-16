<script>
  import Navbar from '$lib/components/Navbar/Navbar.svelte';
  import { onMount } from 'svelte';
	import printerImage from '$lib/assets/images/printers/transparent2.png';

  onMount(() => {
    // Add any necessary JavaScript for animations or interactivity
  });

  const expertiseItems = [
    { title: '3D Printing', description: 'Create intricate, geometrically complex lamp shades and fixtures with precision and efficiency.' },
    { title: 'CNC Machining', description: 'Sculpt metal and wood into stunning lamp bases, sconces, and decorative elements with utmost durability and precision.' },
    { title: 'Advanced Electronics', description: 'Integrate smart lighting technology for customizable color temperatures, dimming capabilities, and smartphone control.' }
  ];

  const uniqueFeatures = [
    { title: 'Customization at Scale', description: 'Offer bespoke lighting at surprisingly accessible price points through innovative production methods.' },
    { title: 'Eco-Friendly Focus', description: 'Prioritize sustainable materials and energy-efficient LED technology for environmentally conscious lighting solutions.' },
    { title: 'Collaborative Design Process', description: 'Engage customers in the creative process with our intuitive online design tools.' },
    { title: 'Rapid Turnaround', description: 'Deliver custom lighting solutions faster than traditional methods, without compromising on quality.' }
  ];
</script>

<div class="min-h-screen bg-transparent">

  <!-- Hero Section -->
  <section class="relative h-screen flex items-start justify-center overflow-hidden pt-40 ">
    <div class="lines">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>

    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-black opacity-60"></div>
      <img src={printerImage} alt="Kaizen Customs LLC, 3D Prints" class="absolute top-40 h-full w-full object-cover scale-50" />
    </div>
    <div class="relative z-10 text-center text-white w-1/2 top-30">
      <h1 class="text-6xl font-bold mb-4 ">Smart Home Innovations & Maker Essentials</h1>
      <p class="text-xl text-default">Revolutionizing custom lighting through technology and design</p>
    </div>
  </section>

  <!-- Our Expertise Section -->
  <section class="py-20 bg-background">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-12 text-center text-white">Our Expertise</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each expertiseItems as item}
          <div class="bg-navigation p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 class="text-2xl font-semibold mb-4 text-primary">{item.title}</h3>
            <p class="text-default">{item.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- What Sets Us Apart Section -->
  <section class="py-20 bg-navigation text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-12 text-center">What Sets Us Apart</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each uniqueFeatures as feature}
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span class="text-2xl text-background">✓</span>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">{feature.title}</h3>
              <p class="text-gray-400">{feature.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Our Vision Section -->
  <section class="py-20 expertise text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold mb-8">Our Vision</h2>
      <p class="text-xl mb-8 max-w-3xl mx-auto text-default">
        We believe that lighting is more than illumination—it's an expression of personality and a crucial element of any space's ambiance. 
        Our mission is to democratize access to high-end, custom lighting design, empowering homeowners, interior designers, and businesses to create spaces that truly shine.
      </p>
      <button class="bg-primary text-black py-3 px-8 rounded-md font-semibold hover:bg-secondary hover:text-white transition-colors duration-300">
        Explore Our Designs
      </button>
    </div>
  </section>

</div>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box !important;
}

html, body {
  height: 100%;
}

body {
  display: table;
  width: 100%;
  height: 100%;
  background-color: #171717;
  color: #000;
  line-height: 1.6;
  position: relative;
  font-family: sans-serif;
  overflow: hidden;
}

.expertise {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230b0c10'%3e%3c/rect%3e%3cpath d='M0 89.6C46.83 36.92 60.89 40.67 124.44 0C130.89 -4.13 132.22 0 140 0C210 0 210 0 280 0C350 0 350 0 420 0C454.25 0 456.17 -8.17 488.51 0C526.17 9.51 524.55 35.37 560 35.37C593.23 35.37 590.73 8.88 625.88 0C660.73 -8.8 662.94 0 700 0C770 0 770 0 840 0C888.9 0 916.78 -28.78 937.81 0C967.93 41.22 941.06 69.98 942.31 140C943.56 209.98 928.84 216.36 942.81 280C947.69 302.22 957.15 305.93 980 311.73C1045.74 328.43 1056.71 336.03 1120 325C1147.71 320.17 1162 300.34 1162 280C1162 263.01 1139.19 267.38 1120 250.35C1060.29 197.38 1013.52 202.48 1004.2 140C994.85 77.31 1035.7 56.79 1082.67 0C1093.6 -13.21 1101.34 0 1120 0C1190 0 1190 0 1260 0C1330 0 1330 0 1400 0C1470 0 1505 -35 1540 0C1575 35 1540 70 1540 140C1540 210 1540 210 1540 280C1540 350 1540 350 1540 420C1540 490 1575 525 1540 560C1505 595 1470 560 1400 560C1330 560 1330 560 1260 560C1190 560 1190 560 1120 560C1058.24 560 1057.23 563.92 996.47 560C987.23 559.4 985.89 558.18 980 550.97C928.74 488.18 932.4 484.43 882.17 420C862.4 394.64 861.54 371.39 840 371.39C817.73 371.39 817.16 395.59 794.55 420C747.16 471.16 748.68 522.54 700 522.54C648.65 522.54 594.49 471.27 594.49 420C594.49 368.73 646.94 368.41 700 317.46C719.84 298.41 740.3 298.95 740.3 280C740.3 260.66 725.79 245.62 700 240.88C635.64 229.06 626.62 233.26 560 246.88C530.96 252.82 523.16 254.7 508.67 280C473.58 341.26 488.9 351.82 460.83 420C444.57 459.51 453.11 490.57 420 495.38C362.7 503.7 333.69 428.96 280 446.25C233.35 461.27 262.66 524.79 219.33 560C192.66 581.67 179.67 560 140 560C70 560 35 595 0 560C-35 525 0 490 0 420C0 350 0 350 0 280C0 210 0 210 0 140C0 114.8 -15.39 106.92 0 89.6' stroke='rgba(31%2c 40%2c 51%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M280 246.59C262.45 246.59 248.72 259.28 248.72 280C248.72 337.24 260.18 402.5 280 402.5C300.73 402.5 329.83 333.63 329.83 280C329.83 255.67 303.01 246.59 280 246.59' stroke='rgba(31%2c 40%2c 51%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M140 414.47C136.14 414.47 134.25 416.44 134.25 420C134.25 429.71 131.31 441 140 441C169.18 441 210 426.77 210 420C210 413.5 174.01 414.47 140 414.47' stroke='rgba(31%2c 40%2c 51%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M101.82 140C119.85 124.25 123.95 128.64 140 111.03C187.76 58.64 177.77 40.98 229.44 0C247.77 -14.53 254.72 0 280 0C340.66 0 380.93 -32.05 401.33 0C425.48 37.95 403.26 81.75 369.09 140C342.6 185.16 321.47 169.98 280 206.82C242.67 239.98 244.29 242.14 211.49 280C174.29 322.94 177.83 326.12 140 368.42C115.23 396.12 91.23 387.08 86.3 420C76.87 482.87 135.49 520.73 111.28 560C92.34 590.73 24.64 591 0 560C-31 521 0 490 0 420C0 350 0 350 0 280C0 256.66 -12.86 251.01 0 233.33C38.05 181.01 49.85 185.4 101.82 140' stroke='rgba(31%2c 40%2c 51%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M468 140C468 105.87 511.52 102.18 560 72.21C624.77 32.18 626.94 34.85 694.51 0C696.94 -1.25 697.26 0 700 0C770 0 770 0 840 0C864.93 0 885.28 -18.31 889.86 0C902.78 51.69 875.43 69.96 875 140C874.57 209.96 900.13 217.32 888.13 280C882.63 308.71 863.9 322.78 840 322.78C816.5 322.78 816.25 301.83 793.33 280C746.25 235.15 755.9 206.36 700 189.41C639.23 170.98 623.93 222.87 560 209.25C507.93 198.16 468 174.39 468 140' stroke='rgba(31%2c 40%2c 51%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1047.41 140C1047.41 93.44 1070.39 67.24 1120 40.34C1176.68 9.6 1193.81 40.77 1260 24.71C1276.94 20.6 1269.4 2.97 1286.25 0C1339.4 -9.38 1343.13 0 1400 0C1443.34 0 1486.67 -24.14 1486.67 0C1486.67 45.86 1443.34 70 1400 140C1400 140 1400 140 1400 140C1375.77 210 1351.54 219.03 1351.54 280C1351.54 303.03 1373.26 306.73 1400 308C1467.49 311.2 1503.69 259.89 1540 288.94C1573.69 315.89 1540 354.47 1540 420C1540 480.39 1549.33 484.79 1540 540.78C1537.66 554.79 1531.07 558.02 1516.67 560C1461.07 567.63 1458.34 560 1400 560C1347.87 560 1320.15 589.83 1295.74 560C1262.87 519.83 1298.52 487.59 1285.45 420C1280.65 395.19 1270.85 398.52 1260 375.2C1238.29 328.52 1252.28 317.89 1220.33 280C1182.28 234.88 1167.6 247.72 1120 209.18C1081.14 177.72 1047.41 177.86 1047.41 140' stroke='rgba(31%2c 40%2c 51%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M389.15 280C389.15 254.82 404.67 230.81 420 230.81C435.26 230.81 450.33 254.83 450.33 280C450.33 308.78 435.27 338.71 420 338.71C404.68 338.71 389.15 308.77 389.15 280' stroke='rgba(31%2c 40%2c 51%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M645.22 420C645.22 393.38 673.34 366.76 700 366.76C725.27 366.76 749.09 393.38 749.09 420C749.09 446.62 725.27 473.24 700 473.24C673.34 473.24 645.22 446.62 645.22 420' stroke='rgba(31%2c 40%2c 51%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M924.34 420C924.34 387.9 944.06 364.37 980 358.4C1041.89 348.12 1051.2 368.8 1120 387.5C1164.54 399.6 1198.72 386.7 1206.67 420C1219.31 472.95 1195.04 505.3 1161.18 560C1151.71 575.3 1140.59 560 1120 560C1109.7 560 1108.6 564.3 1099.41 560C1038.6 531.56 1032.01 536.11 980 494.52C944.48 466.11 924.34 455.96 924.34 420' stroke='rgba(31%2c 40%2c 51%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M213.89 140C213.89 107.48 252.4 57.93 280 57.93C303.48 57.93 316.06 103.7 316.06 140C316.06 158.26 299.77 167.05 280 167.05C248.68 167.05 213.89 162.04 213.89 140' stroke='rgba(31%2c 40%2c 51%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M518 140C518 124.42 535.8 109.05 560 109.05C623.62 109.05 693.64 124.37 693.64 140C693.64 155.65 623.51 171.61 560 171.61C535.69 171.61 518 155.7 518 140' stroke='rgba(31%2c 40%2c 51%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M840 10.77C837.95 10.77 834.17 3.65 834.17 0C834.17 -1.74 837.09 0 840 0C840.96 0 841.92 -0.8 841.92 0C841.92 4.58 841.83 10.77 840 10.77' stroke='rgba(31%2c 40%2c 51%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1090.62 140C1090.62 121.16 1097.76 105.79 1120 99.66C1182.45 82.45 1195.47 80.09 1260 93.33C1293.8 100.26 1316.67 111.73 1316.67 140C1316.67 182.66 1300.94 229.37 1260 235.2C1202.61 243.37 1187.14 205.74 1120 168C1102.45 158.14 1090.62 155.33 1090.62 140' stroke='rgba(31%2c 40%2c 51%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1400 50.26C1381.2 50.26 1359.17 15.41 1359.17 0C1359.17 -9.72 1379.59 0 1400 0C1415.55 0 1431.11 -8.67 1431.11 0C1431.11 16.46 1417.17 50.26 1400 50.26' stroke='rgba(31%2c 40%2c 51%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M59.5 280C59.5 247.27 107.31 203.33 140 203.33C164.69 203.33 174.26 243.9 174.26 280C174.26 303.42 161.49 322.37 140 322.37C104.11 322.37 59.5 306.79 59.5 280' stroke='rgba(31%2c 40%2c 51%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 344.32C10.14 344.32 34.31 379.49 38.36 420C45.08 487.33 38.18 499.28 21.54 560C19 569.28 1.44 569.33 0 560C-9.33 499.33 0 490 0 420C0 382.16 -9.04 344.32 0 344.32' stroke='rgba(31%2c 40%2c 51%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M695.94 420C695.94 418.03 698.02 416.06 700 416.06C701.87 416.06 703.64 418.03 703.64 420C703.64 421.97 701.87 423.94 700 423.94C698.02 423.94 695.94 421.97 695.94 420' stroke='rgba(31%2c 40%2c 51%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M966.51 420C966.51 412.22 971.05 405.07 980 405.07C1005.79 405.07 1036 411.81 1036 420C1036 428.31 1005.12 438.06 980 438.06C970.38 438.06 966.51 428.72 966.51 420' stroke='rgba(31%2c 40%2c 51%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1365 420C1368.86 397.44 1377.54 393.04 1400 385.78C1465.04 364.74 1489.97 351.17 1540 363.4C1559.97 368.28 1540 391.7 1540 420C1540 446.08 1554.62 452.98 1540 472.16C1501.28 522.98 1489.73 524.61 1433.33 560C1419.73 568.53 1416.66 560 1400 560C1385.11 560 1373.28 572.27 1370.21 560C1355.78 502.27 1353.96 484.55 1365 420' stroke='rgba(31%2c 40%2c 51%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
}

.lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  margin: auto;
  width: 90vw;
  
}

.line {
  position: absolute;
  width: 1px;
  height: 100%;
  top: 0;
  left: 50%;
  background: rgba(255, 255, 255, 0.051);
  overflow: hidden;
}
.line::after {
  content: "";
  display: block;
  position: absolute;
  height: 15vh;
  width: 100%;
  top: -50%;
  left: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #66FCF1 75%, #66FCF1 100%);
  -webkit-animation: drop 7s 0s infinite;
          animation: drop 7s 0s infinite;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
  -webkit-animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
          animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
}

.line:nth-child(1) {
  margin-left: -40%;
}
.line:nth-child(1)::after {
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
}

.line:nth-child(2) {
  margin-left: -20%;
}
.line:nth-child(2)::after {
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
}

.line:nth-child(4) {
  margin-left: 20%;
}
.line:nth-child(3)::after {
  -webkit-animation-delay: 2.5s;
          animation-delay: 2.5s;
}

.line:nth-child(5) {
  margin-left: 40%;
}
.line:nth-child(5)::after {
  -webkit-animation-delay: 2.5s;
          animation-delay: 2.5s;
}


@-webkit-keyframes drop {
  0% {
    top: -50%;
  }
  100% {
    top: 110%;
  }
}

@keyframes drop {
  0% {
    top: -50%;
  }
  100% {
    top: 110%;
  }
}
</style>
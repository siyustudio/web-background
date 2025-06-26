  let body = document.body;
        let info = document.getElementById("info");
        let home = document.getElementById("home");
        let judul = document.getElementById("judul");

        // Batas dan counter
        const modeLimit = 10;
        let modeCounter = 0;

        // Untuk dark mode toggle
        let isDarkMode = false;

        // Untuk color mode
        let colorIndex = 0;
        const colorClasses = ["merah", "kuning", "hijau"];

        // Fungsi untuk memperbarui informasi dan mengecek batas
        function handleModeUsed() {
            modeCounter++;
            const sisa = modeLimit - modeCounter;
            info.textContent = `Mode digunakan ${modeCounter}x, tersisa ${sisa}x`;

            if (modeCounter >= modeLimit) {
                info.textContent = `Batas penggunaan mode sudah habis.`;
                home.textContent = `RESTART`;
                document.getElementById("darkBtn").style.display = 'none';
                document.getElementById("colorBtn").style.display = 'none';
            }
        }

        function darkMode() {
            // Reset color mode class
            body.classList.remove(...colorClasses);

            // Toggle dark mode
            isDarkMode = !isDarkMode;
            body.classList.toggle("dark");
            judul.textContent = isDarkMode ? "DARK MODE" : "LIGHT MODE";

            handleModeUsed();
        }

        function colorMode() {
            // Reset dark mode
            isDarkMode = false;
            body.classList.remove("dark");

            // Ganti ke warna berikut
            body.classList.remove(...colorClasses);
            const currentClass = colorClasses[colorIndex];
            body.classList.add(currentClass);
            judul.textContent = `MODE ${currentClass.toUpperCase()}`;
            colorIndex = (colorIndex + 1) % colorClasses.length;

            handleModeUsed();
        }

        function reRender() {
            location.reload();
        }
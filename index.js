function calculateLife() {
      const age = Number(document.getElementById("age").value);
      if (age < 0 || age > 90 || isNaN(age)) {
        document.getElementById("result").textContent = "Enter a valid age between 0 and 90!";
        return;
      }

      const yearsLeft = 90 - age;
      const daysLeft = yearsLeft * 365;
      const weeksLeft = yearsLeft * 52;
      const monthsLeft = yearsLeft * 12;

      document.getElementById("result").textContent =
        `You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`;

      const percentageLived = (age / 90) * 100;
      const progressBar = document.getElementById("progressBar");
      const progressText = document.getElementById("progressText");

      progressBar.style.width = `${percentageLived}%`;
      progressText.textContent = `You've lived ${percentageLived.toFixed(1)}% of your 90 years.`;

    }
     const cursor = document.getElementById("cursor");

    // Move cursor with mouse
    document.addEventListener("mousemove", (e) => {
      cursor.style.top = e.clientY + "px";
      cursor.style.left = e.clientX + "px";
    });

    // Optional: change color when hovering buttons
    const buttons = document.querySelectorAll("button, a");
    buttons.forEach(btn => {
      btn.addEventListener("mouseenter", () => {
        cursor.style.backgroundColor = "#f472b6"; // change color on hover
        cursor.style.transform = "translate(-50%, -50%) scale(1.5)"; // grow
      });
      btn.addEventListener("mouseleave", () => {
        cursor.style.backgroundColor = "#38bdf8"; // original color
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
      });
    });
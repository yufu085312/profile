document.addEventListener("DOMContentLoaded", function() {
    const username = "yufu085312";
    const repoNames = ["Ramen_review_frontend", "Ramen_review_backend"];
    const container = document.getElementById("work-container");

    repoNames.forEach(repoName => {
        fetch(`https://api.github.com/repos/${username}/${repoName}`)
            .then(response => response.json())
            .then(repo => {
                if (!repo.message) {
                    const card = document.createElement("div");
                    card.className = "work-card";

                    const repoLink = document.createElement("a");
                    repoLink.href = repo.html_url;
                    repoLink.target = "_blank";
                    repoLink.innerHTML = `<h3>${repo.name}</h3>`;

                    const description = document.createElement("p");
                    description.textContent = repo.description || "No description";

                    const languageBadge = document.createElement("span");
                    languageBadge.className = `badge ${repo.language ? repo.language.toLowerCase() : ""}`;
                    languageBadge.textContent = repo.language || "Unknown";

                    card.appendChild(repoLink);
                    card.appendChild(description);
                    card.appendChild(languageBadge);

                    container.appendChild(card);
                } else {
                    console.error('Repository not found:', repo.message);
                }
            })
            .catch(error => console.error('Error fetching repo:', error));
    });
});
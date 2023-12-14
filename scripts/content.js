window.onload = function() {
    const article = document.querySelector(".pv-top-card-v2-ctas").querySelector("div");
    console.log(article.textContent);
    // `document.querySelector` may return null if the selector doesn't match anything.
    if (article) {
    //   const text = article.textContent;
    
    //   const wordMatchRegExp = /[^\s]+/g; // Regular expression
    //   const words = text.matchAll(wordMatchRegExp);
      // matchAll returns an iterator, convert to array to get word count
    //   const wordCount = [...words].length;
    //   const readingTime = Math.round(wordCount / 200);
      const badge = document.createElement("div");
      badge.classList = "ember-view profile-action-compose-option";
      // Use the same styling as the publish information in an article's header
    //   badge.classList.add("artdeco-button artdeco-button--2 artdeco-button--secondary ember-view pvs-profile-actions__action");
    const link = document.createElement("a");
    link.href = "https://www.linkedin.com/in/md-anas/";
    link.textContent = "Get Easy Referrals";
    const button = document.createElement("button");
    button.appendChild(link);
    button.classList = "";
    badge.appendChild(button);
    
      // Support for API reference docs
    //   const heading = article.querySelector("h1");
      // Support for article docs with date
    //   const date = article.querySelector("time")?.parentNode;
    article.appendChild(badge);
    }
};
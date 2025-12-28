// Typing animation for terminal welcome message
(function() {
    const typingLine = document.getElementById('typing-line');
    const text = 'As the  <span style="color:var(--term-accent)">light Dims</span>. Type <b>whoami</b> or <b>whyhere</b>.';
    let index = 0;
    let currentText = '';
    
    function type() {
        if (index < text.length) {
            if (text[index] === '<') {
                const closeTag = text.indexOf('>', index);
                currentText += text.substring(index, closeTag + 1);
                index = closeTag + 1;
            } else {
                currentText += text[index];
                index++;
            }
            typingLine.innerHTML = currentText;
            setTimeout(type, 50);
        }
    }
    
    type();
})();

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-path');
    const themeText = document.getElementById('theme-text');
    const bannerImg = document.querySelector('.header-banner img');
    const profileAvatar = document.querySelector('.profile-avatar');
    const profileImg = document.querySelector('.profile-avatar img');
    const collapsibleBtns = document.querySelectorAll('.collapsible-btn');
    
    bannerImg.style.opacity = '0';
    profileAvatar.classList.remove('flip');
    void profileAvatar.offsetWidth;
    profileAvatar.classList.add('flip');
    
    setTimeout(() => {
        if (body.getAttribute('data-theme') === 'light') {
            body.removeAttribute('data-theme');
            // Switching to dark mode - show sun icon and "Light" text
            themeIcon.setAttribute('d', 'M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z M12,20c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,19.6,12.6,20,12,20z M5.6,6.6c-0.3,0-0.6-0.1-0.8-0.3L3.4,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6,6.5,5.8,6.6,5.6,6.6z M18.4,19.4c-0.3,0-0.6-0.1-0.8-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C19,19.3,18.7,19.4,18.4,19.4z M20,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S20.6,13,20,13z M6,13H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S6.6,13,6,13z M18.4,6.6c-0.3,0-0.6-0.1-0.8-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C19,6.5,18.7,6.6,18.4,6.6z M5.6,19.4c-0.3,0-0.6-0.1-0.8-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C6.2,19.3,5.9,19.4,5.6,19.4z');
            themeText.textContent = 'Light';
            bannerImg.src = 'static/twlight.jpg';
            profileImg.src = 'static/spacechristmas.png';
            // Dark mode - show light colored buttons
            collapsibleBtns.forEach(btn => {
                btn.style.color = '#fff';
                btn.style.backgroundColor = '#111';
                btn.style.borderColor = '#2f3336';
            });
        } else {
            body.setAttribute('data-theme', 'light');
            // Switching to light mode - show moon icon and "Dark" text
            themeIcon.setAttribute('d', 'M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z');
            themeText.textContent = 'Dark';
            bannerImg.src = 'static/sunrise.png';
            profileImg.src = 'static/lightchristmas.png';
            // Light mode - show dark colored buttons
            collapsibleBtns.forEach(btn => {
                btn.style.color = '#0f1419';
                btn.style.backgroundColor = '#f7f9fa';
                btn.style.borderColor = '#ccd6dd';
            });
        }
        bannerImg.style.opacity = '1';
    }, 150);
    
    setTimeout(() => {
        profileAvatar.classList.remove('flip');
    }, 300);
}

function switchTab(tabName, element) {
    // Remove active class from all tabs and tab contents
    const tabs = document.querySelectorAll('.nav-tab');
    const contents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding content
    element.classList.add('active');
    document.getElementById(tabName + '-content').classList.add('active');
}
(() => {
    const screen = document.getElementById('screen');
    const hidden = document.getElementById('hidden-input');
    const shell = { user: 'guest', host: 'kwabs', path: '~/random' };
    let commandCount = 0; // count valid commands
    const maxCommands = 2; // only allow 2
  
    const commands = {
      whoami() {
        return "Programmer . Engineer . Music Lover . occasional chaos architect.";
      },
      whyhere() {
        return "To see the other version of he you see...but curiosity kills.";
      }
    };
  
    function newline(text='') {
      const div = document.createElement('div');
      div.className = 'line';
      div.textContent = text;
      screen.appendChild(div);
    }
  
    function promptLine() {
      if (commandCount >= maxCommands) {
        newline("\n[Session closed]");
        return; // stop creating new prompts
      }
      const line = document.createElement('div');
      line.className = 'line';
      line.innerHTML = `<span class="prompt">${shell.user}@${shell.host}</span>:<span class="path">${shell.path}</span>$ <span id="live" class="inputline"></span><span class="cursor" aria-hidden="true"></span>`;
      screen.appendChild(line);
      scrollToBottom();
    }
  
    function handle(cmdline) {
      if (!cmdline.trim()) return;
      const [cmd] = cmdline.split(/\s+/);
      const fn = commands[cmd];
      if (fn) {
        const out = fn();
        if (out) out.split('\n').forEach(l => newline(l));
        commandCount++;
      } else {
        newline(`bash: ${cmd}: command not found`);
      }
    }
  
    function scrollToBottom(){ screen.scrollTop = screen.scrollHeight; }
    function focusHidden(){ hidden.focus(); }
    screen.addEventListener('click', focusHidden);
  
    hidden.addEventListener('input', () => {
      const live = document.getElementById('live');
      if (live) live.textContent = hidden.value;
      scrollToBottom();
    });
  
    hidden.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const cmd = hidden.value;
        const current = document.getElementById('live');
        if (current) current.replaceWith(document.createTextNode(cmd));
        hidden.value = '';
        handle(cmd);
        promptLine();
      }
    });
  
    focusHidden();
  })();

// API functions
async function fetchBits() {
    try {
        const response = await fetch('https://kwabsntim1.pythonanywhere.com/api/bits');
        const data = await response.json();
        displayBits(data.bits, data.pinned);
    } catch (error) {
        console.error('Error fetching bits:', error);
    }
}

async function fetchFrames() {
    try {
        const response = await fetch('https://kwabsntim1.pythonanywhere.com/api/frames');
        const data = await response.json();
        displayFrames(data.frames);
    } catch (error) {
        console.error('Error fetching frames:', error);
    }
}

function displayBits(bits, pinnedBit) {
    const container = document.querySelector('#posts-content .tweets-section');
    
    // Preserve welcome message and clear only dynamic content
    const welcomeMessage = container.querySelector('.welcome-message');
    container.innerHTML = '';
    if (welcomeMessage) {
        container.appendChild(welcomeMessage);
    }
    
    // Add pinned bit if exists
    if (pinnedBit) {
        const pinnedSection = document.createElement('div');
        pinnedSection.className = 'pinned-section';
        pinnedSection.innerHTML = `
            <div class="pinned-header">
                <svg class="pin-icon" viewBox="0 0 24 24">
                    <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
                </svg>
                Pinned
            </div>
        `;
        const tweetElement = createTweetElement(pinnedBit);
        pinnedSection.appendChild(tweetElement.querySelector('.tweet'));
        container.appendChild(pinnedSection);
    }
    
    // Add regular bits (excluding pinned one)
    bits.filter(bit => !bit.pinned).forEach(bit => {
        const bitElement = createTweetElement(bit);
        container.appendChild(bitElement);
    });
}

function displayFrames(frames) {
    const container = document.querySelector('#media-content .tweets-section');
    
    // Clear existing content
    container.innerHTML = '';
    
    frames.forEach(frame => {
        const frameElement = createFrameElement(frame);
        container.appendChild(frameElement);
    });
}

function createTweetElement(post) {
    const div = document.createElement('div');
    div.className = 'tweet-container';
    div.onclick = (e) => {
        if (!e.target.classList.contains('delete-btn')) {
            toggleCardComments(div, `bit-${post.id}`);
        }
    };
    div.innerHTML = `
        <div class="tweet">
            <div class="tweet-avatar">
                <img src="static/profile.jpeg" alt="Profile">
            </div>
            <div class="tweet-content">
                <div class="tweet-header">
                    <span class="tweet-username">${post.username}</span>
                    <div class="tweet-right">
                        <span class="tweet-date">${post.date}</span>
                        <button class="delete-btn" onclick="event.stopPropagation(); deleteBit(${post.id})">×</button>
                    </div>
                </div>
                <div class="tweet-text">${post.text}</div>
                <div class="comments-section">
                    <div id="disqus-bit-${post.id}" class="disqus-container" style="display: none;"></div>
                </div>
            </div>
        </div>
    `;
    return div;
}

function createFrameElement(frame) {
    const div = document.createElement('div');
    div.className = 'tweet-container';
    div.innerHTML = `
        <div class="tweet">
            <div class="tweet-avatar">
                <img src="static/profile.jpeg" alt="Profile">
            </div>
            <div class="tweet-content">
                <div class="tweet-header">
                    <span class="tweet-username">${frame.username}</span>
                    <div class="tweet-right">
                        <span class="tweet-date">${frame.date}</span>
                    </div>
                </div>
                <div class="tweet-text">${frame.caption}</div>
                ${frame.image_url && frame.image_url !== 'placeholder' ? `<div class="image-placeholder">📷 ${frame.caption}</div>` : ''}
            </div>
        </div>
    `;
    return div;
}



// Delete bit function
async function deleteBit(bitId) {
    if (confirm('Are you sure you want to delete this bit?')) {
        try {
            const response = await fetch(`https://kwabsntim1.pythonanywhere.com/api/bits/${bitId}`, {
                method: 'DELETE'
            });
            const result = await response.json();
            if (result.status === 'success') {
                fetchBits();
            }
        } catch (error) {
            console.error('Error deleting bit:', error);
        }
    }
}

// Fetch and display profile picture
async function fetchProfile() {
    try {
        const response = await fetch('https://kwabsntim1.pythonanywhere.com/api/profile');
        const data = await response.json();
        if (data.profile.avatar_url) {
            const avatarElement = document.querySelector('.avatar-image');
            const imageUrl = data.profile.avatar_url.startsWith('/uploads/') 
                ? `https://kwabsntim1.pythonanywhere.com${data.profile.avatar_url}` 
                : data.profile.avatar_url;
            avatarElement.innerHTML = `<img src="${imageUrl}" alt="Profile" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
        }
    } catch (error) {
        console.error('Error fetching profile:', error);
    }
}

async function fetchBlogs() {
    try {
        const response = await fetch('https://kwabsntim1.pythonanywhere.com/api/blogs');
        const data = await response.json();
        displayBlogs(data.blogs);
    } catch (error) {
        console.error('Error fetching blogs:', error);
    }
}

function displayBlogs(blogs) {
    const container = document.querySelector('#replies-content .tweets-section');
    container.innerHTML = '';
    
    blogs.forEach(blog => {
        const blogElement = createBlogElement(blog);
        container.appendChild(blogElement);
    });
}

function createBlogElement(blog) {
    const div = document.createElement('div');
    div.className = 'tweet-container';
    
    const words = blog.content.split(' ');
    const previewWords = words.slice(0, 25).join(' ');
    const hasMore = words.length > 25;
    
    div.innerHTML = `
        <div class="tweet">
            <div class="tweet-avatar">
                <img src="static/profile.jpeg" alt="Profile">
            </div>
            <div class="tweet-content">
                <div class="tweet-header">
                    <span class="tweet-username">${blog.username}</span>
                    <div class="tweet-right">
                        <span class="tweet-date">${blog.date}</span>
                    </div>
                </div>
                ${blog.image_url ? `
                    <div class="blog-content">
                        <div class="blog-image">
                            <img src="${blog.image_url}" alt="Blog image">
                        </div>
                        <div class="blog-text">
                            <div class="tweet-text">
                                <span class="blog-preview">${previewWords}</span>
                                <span class="blog-full" style="display: none;">${blog.content}</span>
                                ${hasMore ? '<span class="read-more" onclick="toggleReadMore(this)">... read more</span>' : ''}
                            </div>
                        </div>
                    </div>
                ` : `<div class="tweet-text">${blog.content}</div>`}
                <div class="comments-section">
                    <button class="toggle-comments" onclick="toggleComments('blog-${blog.id}', this)">💬 Comments</button>
                    <div id="disqus-blog-${blog.id}" class="disqus-container" style="display: none;"></div>
                </div>
            </div>
        </div>
    `;
    return div;
}

// Card scroll animation
function initCardAnimations() {
    const cards = document.querySelectorAll('.card-container');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach(card => observer.observe(card));
}



function switchToMake() {
    const makeTab = document.querySelector('.nav-tab:nth-child(2)');
    const currentContent = document.querySelector('.tab-content.active');
    const makeContent = document.getElementById('replies-content');
    
    // Add slide-out animation to current content
    currentContent.style.transform = 'translateX(-100%)';
    currentContent.style.transition = 'transform 0.3s ease-in-out';
    
    setTimeout(() => {
        switchTab('replies', makeTab);
        
        // Add slide-in animation to make content
        makeContent.style.transform = 'translateX(100%)';
        makeContent.style.transition = 'transform 0.3s ease-in-out';
        
        setTimeout(() => {
            makeContent.style.transform = 'translateX(0)';
            window.scrollTo({top: 0, behavior: 'smooth'});
        }, 50);
        
        // Reset transform after animation
        setTimeout(() => {
            currentContent.style.transform = '';
            currentContent.style.transition = '';
            makeContent.style.transform = '';
            makeContent.style.transition = '';
        }, 350);
    }, 300);
}

function toggleCollapsible(button) {
    const content = button.nextElementSibling;
    const isActive = button.classList.contains('active');
    
    if (isActive) {
        button.classList.remove('active');
        content.classList.remove('active');
        
        // Scroll to very top when collapsible closes
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        });
    } else {
        button.classList.add('active');
        content.classList.add('active');
        
        // Scroll to show the collapsible content after it opens
        setTimeout(() => {
            button.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
            });
        }, 300);
    }
}

function openImagePopup(imageSrc) {
    const popup = document.getElementById('image-popup');
    const popupImage = document.getElementById('popup-image');
    const loader = document.getElementById('image-loader');
    
    // Show popup with loader
    popup.classList.add('active');
    loader.style.display = 'flex';
    popupImage.style.display = 'none';
    document.body.style.overflow = 'hidden';
    
    // Load image with cache-busting
    const cacheBustSrc = imageSrc + '?t=' + Date.now();
    const img = new Image();
    img.onload = function() {
        loader.style.display = 'none';
        popupImage.src = cacheBustSrc;
        popupImage.style.display = 'block';
        
        // Prevent image download
        popupImage.oncontextmenu = () => false;
        popupImage.ondragstart = () => false;
        popupImage.onselectstart = () => false;
    };
    img.src = cacheBustSrc;
}

function closeImagePopup() {
    const popup = document.getElementById('image-popup');
    popup.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Load profile when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Ensure page starts at top
    window.scrollTo(0, 0);
    
    // Preload critical images
    const criticalImages = [
        'static/memories.jpg',
        'static/profile.jpeg',
        'static/spacechristmas.png',
        'static/lightchristmas.png'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    initCardAnimations();
    fetchBits();
    fetchFrames();
    fetchBlogs();
    fetchProfile();
    
    // Scroll button logic
    const scrollBtn = document.getElementById('scroll-btn');
    const scrollIcon = document.getElementById('scroll-icon');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        
        if (scrollTop > 300 && scrollTop + clientHeight < scrollHeight - 100) {
            scrollBtn.classList.add('show');
            
            if (scrollTop > lastScrollTop) {
                // Scrolling down - show up arrow
                scrollIcon.querySelector('path').setAttribute('d', 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z');
            } else {
                // Scrolling up - show down arrow
                scrollIcon.querySelector('path').setAttribute('d', 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z');
            }
            lastScrollTop = scrollTop;
        } else {
            scrollBtn.classList.remove('show');
        }
    });
});

function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const iconPath = document.querySelector('#scroll-icon path').getAttribute('d');
    
    if (iconPath.includes('15.41')) {
        // Up arrow is showing, scroll to top
        window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
        // Down arrow is showing, scroll to bottom
        window.scrollTo({top: scrollHeight, behavior: 'smooth'});
    }
}


function toggleReadMore(element) {
    const preview = element.parentElement.querySelector('.blog-preview');
    const full = element.parentElement.querySelector('.blog-full');
    
    if (full.style.display === 'none') {
        preview.style.display = 'none';
        full.style.display = 'inline';
        element.textContent = ' read less';
    } else {
        preview.style.display = 'inline';
        full.style.display = 'none';
        element.textContent = '... read more';
    }
}

function toggleCardComments(cardElement, identifier) {
    const commentsSection = cardElement.querySelector('.comments-section');
    const container = document.getElementById(`disqus-${identifier}`);
    
    if (commentsSection.classList.contains('active')) {
        commentsSection.classList.remove('active');
        container.style.display = 'none';
    } else {
        commentsSection.classList.add('active');
        container.style.display = 'block';
        
        if (!container.hasChildNodes()) {
            const disqusDiv = document.createElement('div');
            disqusDiv.id = `disqus_thread_${identifier}`;
            container.appendChild(disqusDiv);
            
            if (window.DISQUS) {
                window.DISQUS.reset({
                    reload: true,
                    config: function () {
                        this.page.identifier = identifier;
                        this.page.url = window.location.href + '#' + identifier;
                    }
                });
            } else {
                window.disqus_config = function () {
                    this.page.url = window.location.href + '#' + identifier;
                    this.page.identifier = identifier;
                };
                
                const script = document.createElement('script');
                script.src = 'https://YOUR-DISQUS-SHORTNAME.disqus.com/embed.js';
                script.setAttribute('data-timestamp', +new Date());
                document.head.appendChild(script);
            }
        }
    }
}
// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Anita (Nini)",

    // The title that appears in the browser tab
    // You can use emojis! 🛌 💖 💗 🛌 💞 💕
    pageTitle: "I love you Anita 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['😼', '😸', '😽']                       // Cute bears emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No, moch is the love of my life",                                               // Text for "No" button
            secretAnswer: "I don't like you, I love you ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "A bit",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "This February 14th, 2025, Anita Lor, would you do me the biggest favor of being mine?", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No 🧊"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "You mean the world to me baby",  // Shows when they go past 5000%
        high: "You're willing to give up league for me?",              // Shows when they go past 1000%
        normal: "More than sassy fries?? 🍟 "                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "I know we have bumped heads so much anita since we first met. And sometimes it really felt like the odds were against us. But I couldn't do any of this without you. And you've always my light at the end of the tunnel. I want this to work anita, and im gonna make it happen as i can make you happy.",
        message: "I know how lucky I am, I love you",
        emojis: "🌷🌹❤️"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#8f0000",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#8f0000",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dcpdfvofq/video/upload/v1739172011/BAD_BUNNY_-_KETU_TeCR%C3%89_LetraLyrics_DeB%C3%8D_TiRAR_M%C3%A1S_FOToS_jw0k9f.mp3", // Music streaming URL
        startText: "🎵 Sueltalo DJ",        // Button text to start music
        stopText: "🔇 Paralo Ahi",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 

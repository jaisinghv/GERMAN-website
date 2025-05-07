document.addEventListener('DOMContentLoaded', function() {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });
    

    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const tabLinks = document.querySelectorAll('.tab-link');
    
    function activateTab(tabId) {

        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        

        document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
        document.getElementById(tabId).classList.add('active');
    }
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            activateTab(button.getAttribute('data-tab'));
        });
    });
    
    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = link.getAttribute('data-tab');
            activateTab(tabId);
            
            // Scroll to the tabs section
            const tabsSection = link.closest('section').querySelector('.tabs');
            tabsSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const toggle = question.querySelector('.toggle');
            
            const isOpen = answer.style.maxHeight;
            
            document.querySelectorAll('.faq-answer').forEach(item => {
                item.style.maxHeight = null;
            });
            
            document.querySelectorAll('.toggle').forEach(item => {
                item.textContent = '+';
            });
            
                        if (!isOpen) {
                            answer.style.maxHeight = answer.scrollHeight + 'px';
                            toggle.textContent = '-';
                        }
                    });
                });
            });
            
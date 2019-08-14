const configTabs = () => {
    document.querySelectorAll('.tabButton').forEach(button => {
        button.addEventListener('click', () => {
            
            const tabId = button.dataset.tabButton;
            const container = button.parentElement.parentElement
            const toBecomeActive = container.querySelector(`.content[tab="${tabId}"]`);

            button.parentElement.querySelectorAll('.tabButton').forEach(button => {
                button.classList.remove('active');
            })
            container.querySelectorAll('.content').forEach(content => {
                content.classList.remove('activeContent');
            })
            button.classList.add('active');
            toBecomeActive.classList.add('activeContent');
        })
    })
}

window.onload = configTabs;

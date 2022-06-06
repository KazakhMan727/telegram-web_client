let selectedChatId = null;
const sendButton = $("#send_btn");

sendButton.click(function () {
    let settings = {
        url: "http://localhost:8080/users/sendMessage",
        method: "post",
        data: {
            chatId: selectedChatId,
            message: $("#message_input").val()
        }
    }

    $.ajax(settings);
});

const getUsers = async () => {
    let settings = {
        url: "http://localhost:8080/users",
        method: "get",
    }
    
    return await $.ajax(settings);
}

const setUser = (chatId) => {
    selectedChatId = chatId;
    console.log(selectedChatId);
}

const drawUsers = async () => {
    let users = await getUsers();
    let usersBlock = $("#users");
    for (let item of users) {
        usersBlock.append(`
            <div onclick="setUser(${item.chatId})">
                <p>${item.fullName}</p>
            </div>
        `);
    }
}

drawUsers();
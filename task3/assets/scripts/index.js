
const addComment = () => {
	//Сначала находим необходимые элементы в html и сохраняем их в переменных
	const name1 = document.getElementById("name-input");
	const nameText = name1.value;

	const link = document.getElementById("link-input");
	const linkText = link.value;

	const comment = document.getElementById("comment-input");
	const commentText = comment.value;

    //Удаляем пробелы в начале и в конце строки имени и сохраненяем результаты в переменную
	const nameText2 = nameText.trim();
    //Приводим первую букву имени к верхнему регистру, а остальные буквы — к нижнему
	const nameText3 = nameText2.charAt(0).toUpperCase() + nameText2.slice(1).toLowerCase();

    //Здесь реализуется тот самый спам-фильтр: слово "shit" преобразуется в "xxx"; флаг gi указывает на нечувствительность к регистру и глобальный поиск
	const commentTextReplace = commentText.replace(/shit|xxx/gi, "***");

    // Создаём новый элемент - <div>, содержащий текст отформатированного имени
	const divChat = document.createElement("div");
	divChat.textContent = nameText3;
	divChat.classList.add("name");
	chat.appendChild(divChat);

    // Создаём еще один элемент <div>, содержащий аватарку
	const div2Chat = document.createElement("img");
	div2Chat.src = linkText;
	div2Chat.classList.add("image");
	chat.appendChild(div2Chat);

	// Создаём еще один элемент <div>, содержащий сам комментарий
	const div3Chat = document.createElement("div");
	div3Chat.textContent = commentTextReplace;
	div3Chat.classList.add("newText");
	chat.appendChild(div3Chat);

	//Код ниже реализует очистку всех полей ввода, чтобы подготовить их для следующего ввода
	name1.value = "";
	link.value = "";
	comment.value = "";
}
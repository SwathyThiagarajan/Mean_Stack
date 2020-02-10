/*let paragraph = `This is swathy working as software developer in inspirisys solution ltd. I like to learn new technologies and work practically. Write short paragraphs and cover one topic per paragraph. Long paragraphs discourage users from even trying to understand your material. Short paragraphs are easier to read and understand.`

console.log(paragraph); */

let convertTemplate = (...input) => {
	return Array.from(input).join("");
}
console.log(convertTemplate('aa',3));
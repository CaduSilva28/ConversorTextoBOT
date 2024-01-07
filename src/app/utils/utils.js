class utils{
    formatedString = (value) => {
        return value.replaceAll(/\r\n/g, ' ').replaceAll("👇🏻", "👇🏻\n");
    };
}

export default new utils();
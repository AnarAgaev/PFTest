export default class BlogService {

  getResource = async (url, formData) => {

    const response = (data === undefined)
      ? await fetch(url)
      : await fetch(url, {
          method: 'POST',
          cache  : 'no-cache',
          body: formData
        });

    if (!response.ok) {
      throw new Error(`Не удалось получить данные от ${url}, получено: ${response.status}`);
    }

    try {
      return await response.json();
    } catch (error) {
      throw new TypeError(`Полученные данные должны быть в формате JSON. Произошла ошибка в URL: ${url}`);
    }
  };

  getData = async (url) => {
    return await this.getResource(url);
  };
}
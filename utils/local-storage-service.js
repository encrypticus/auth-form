class LocalStorageService {

  setUser = (user) => localStorage.setItem('user', JSON.stringify(user));

  getUser = () => JSON.parse(localStorage.getItem('user') || '{}');

  getName = () => this.getUser().name;

  getEmail = () => this.getUser().email;

  getPhone = () => this.getUser().phone;
}

const localStorageService = new LocalStorageService();

export default localStorageService;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      uz: {
        translation: {
          login: "Kirish",
          signup: "Akkount yaratish",
          login_account: "Akkauntingizga kiring",
          username: "Tahallusingiz",
          password: "Parolingiz",
          remember: "Meni eslab qol.",
          first_name: "Ismingiz",
          last_name: "Sharifingiz",
          school_token: "Maktab tokeningiz",
          tests: "Testlar",
          connect: "Connect",
          info: "Malumotnoma",
          raiting: "Reyting",
          student_login: "O'quvchilar uchun",
          teacher_login: "O'qituvchilar uchun",
          enter_account: "Akkountingizga kiring"
        },
      },
      en: {
        translation: {
          login: "Login",
          signup: "Create Account",
          login_account: "Log in to your account",
          username: "Username",
          password: "Password",
          remember: "Remember me.",
          first_name: "First Name",
          last_name: "Last Name",
          school_token: "Your School Token",
          tests: "Tests",
          connect: "Connect",
          info: "Information",
          raiting: "Rating",
          student_login: "For students",
          teacher_login: "For teachers",
          enter_account: "Login"
        },
      },
      ru: {
        translation: {
          login: "Войти",
          signup: "Создать аккаунт",
          login_account: "Войдите в свой аккаунт",
          username: "Имя пользователя",
          password: "Пароль",
          remember: "Запомнить меня.",
          first_name: "Имя",
          last_name: "Фамилия",
          school_token: "Школьный токен",
          tests: "Тесты",
          connect: "Подключиться",
          info: "Информация",
          raiting: "Рейтинг",
          student_login: "Для учеников",
          teacher_login: "Для учителей",
          enter_account: "Войдите в свой аккаунт",

        },
      },
    },
  });

export default i18n;

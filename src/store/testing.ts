import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAnswer {
  steps: number;
  name: string;
  value: number;
  text: string;
  isChecked: boolean;
}

export interface ITestItem {
  id: number;
  question: string;
}

export interface ITestingState {
  isStart: boolean;
  steps: ITestItem[];
  answer: IAnswer[];
  activeStep: number;
  result: number;
}

const initialState: ITestingState = {
  isStart: false,
  steps: [
    {
      id: 1,
      question: 'Является ли для тебя трудным, самостоятельно зарегистрироваться на какой-либо платформе и разобраться в том, как эта платформа работает? (например: завести почту, создать аккаунт, восстановить пароль, отредактировать личные данные, подключить двухфакторную авторизацию через телефон).',
    },
    {
      id: 2,
      question: 'Как ты считаешь, если ты пользуешься Telegram только с телефона и тебе нужно посмотреть какой-то файл с компьютера. Ты бы попросил(а) скинуть этот файл, в тот сервис, который у тебя есть на компьютере (например на почту)? Или будет проще установить Telegram Desktop на компьютер?.',
    },
    {
      id: 3,
      question: 'Если ты столкнулся с проблемой в интернете (например не знаешь как сменить пароль). Тебе проще разобраться в проблеме самому и только если уже ничего не помогает обратиться за помощью? Или сразу попросить помощь у знающего человека?',
    },
    {
      id: 4,
      question: 'Как ты считаешь, человек, который работает в сфере Web разработки, должен понимать почему у него сломался телефон, почему не работает WiFi, как починить принтер ну и в принципе хорошо понимать любую технику в современном быту?',
    },
    {
      id: 5,
      question: 'Сколько в среднем ты в день, проводишь времени за компьютером?',
    },
    {
      id: 6,
      question: 'В каком состоянии твой компьютер (ноутбук)?',
    },
  ],
  answer: [
    {
      steps: 1,
      name: 'answer11',
      value: 2,
      text: 'Я попрошу (друга, сына, племянника) того кто лучше в этом разбирается.',
      isChecked: false,
    },
    {
      steps: 1,
      name: 'answer12',
      value: 8,
      text: 'Мне не составит труда самостоятельно пройти регистрацию, но мне нужно много времени, что бы понять как устроен интерфейс приложения, что нужно нажать, что бы сделать что-то.',
      isChecked: false,
    },
    {
      steps: 1,
      name: 'answer13',
      value: 17,
      text: 'Я много раз самостоятельно проходил(а) регистрации и достаточно быстро понимаю логику практически любого приложения.',
      isChecked: false,
    },
    {
      steps: 2,
      name: 'answer21',
      value: 2,
      text: 'Я так делаю постоянно. Мне не хочется тратить время на установку Telegram на компьютер. А почту на компе я знаю как открыть.',
      isChecked: false,
    },
    {
      steps: 2,
      name: 'answer22',
      value: 17,
      text: 'Я установлю Telegram Desktop на компьютер, что бы не заставлять других людей делать лишние действия, пересылая мне файл на почту. И в следующий раз я смогу сразу открыть файл на компьютере без лишних манипуляций.',
      isChecked: false,
    },
    {
      steps: 2,
      name: 'answer23',
      value: 0,
      text: 'Почему я кому то что-то должен(а)? Пускай под меня все подстраиваются. Если у меня нет Telegram Desktop, зачем мне вообще заморачиваться?',
      isChecked: false,
    },
    {
      steps: 3,
      name: 'answer31',
      value: 2,
      text: 'Я боюсь что-то не так нажать, поэтому попрошу знающего человека.',
      isChecked: false,
    },
    {
      steps: 3,
      name: 'answer32',
      value: 17,
      text: 'Мне интересно разобраться в проблеме самостоятельно, что бы не зависеть от других людей.',
      isChecked: false,
    },
    {
      steps: 3,
      name: 'answer33',
      value: 0,
      text: 'Мне лень разбираться самому, проще попросить кого то.',
      isChecked: false,
    },
    {
      steps: 4,
      name: 'answer41',
      value: 8,
      text: 'Любой айтишник должен хорошо разбираться в любой технике и программе! Неважно это компьютер, чайник или сайт.',
      isChecked: false,
    },
    {
      steps: 4,
      name: 'answer42',
      value: 17,
      text: 'Программист знает основные принципы работы техники / ПО, но он не является специалистом во всех областях электроники. Ему просто будет проще разобраться в этих проблемах. В то же время это не означает, что он обязан всем и каждому, что-то ремонтировать по зову "Ну ты ж программист!" значит почини.',
      isChecked: false,
    },
    {
      steps: 4,
      name: 'answer43',
      value: 2,
      text: 'Программист хорошо разбирается только в своей сфере деятельности, но совершенно не поймет как запустить стиралку (если он никогда ее не запускал).',
      isChecked: false,
    },
    {
      steps: 5,
      name: 'answer51',
      value: 2,
      text: 'Мне не нужен компьютер, потому что все мои потребности закрывает телефон.',
      isChecked: false,
    },
    {
      steps: 5,
      name: 'answer52',
      value: 8,
      text: '2-3 часа, просто для развлечения или потому что на компе я могу учиться, или делать вещи, которые на телефоне я не могу сделать.',
      isChecked: false,
    },
    {
      steps: 5,
      name: 'answer53',
      value: 17,
      text: 'Постоянно, потому что моя работа (хобби) связана с компьютером.',
      isChecked: false,
    },
    {
      steps: 6,
      name: 'answer61',
      value: 0,
      text: 'Компьютеру (ноутбуку) от 5-10 лет. Я просто в основном телефоном пользуюсь, не всегда есть возможность воспользоваться компом, он у меня 2 часа грузит, моросит и т.д., надо в ремонт сдавать.',
      isChecked: false,
    },
    {
      steps: 6,
      name: 'answer62',
      value: 17,
      text: 'Компьютеру от 1-5 лет. «Маго-ядерный едренбатон!», который потянет любую игрушку на максималке! И еще в этот момент можно рендерить видео в 4k разрешении и параллельно стрим запустить, вместе с браузером в котором 50 вкладок будет открыто.',
      isChecked: false,
    },
    {
      steps: 6,
      name: 'answer63',
      value: 17,
      text: 'Компьютеру от 1-5 лет. Не «Маго-ядерный едренбатон!», который любую игрушку потянет, но для работы вполне сойдет.',
      isChecked: false,
    },
  ],
  activeStep: 0,
  result: 0,
};

const testingSlice = createSlice({
  name: 'testing',
  initialState,
  reducers: {
    startTesting(state) {
      state.isStart = true;
    },
    nextStep(state, action: PayloadAction<number>) {
      state.activeStep = state.activeStep + 1;
      state.result = state.result + action.payload;
    },
    backStep(state, action: PayloadAction<number>) {
      state.activeStep = state.activeStep - 1;
      state.result = state.result - action.payload;
    },
    checkAnswer(state, action: PayloadAction<{ id: number, name: string }>) {
      const newAnswer = state.answer.map((item) => {
        const newItem = { ...item };

        newItem.isChecked = false;

        if ((newItem.steps === action.payload.id) && (newItem.name === action.payload.name)) {
          newItem.isChecked = !newItem.isChecked;
        }

        return newItem;
      });

      state.answer = [...newAnswer];
      console.log(action.payload.id, action.payload.name);
    },
    resetStep(state) {
      state.answer = initialState.answer;
      state.result = 0;
      state.activeStep = 0;
    },
  },
});

export const {
  startTesting,
  nextStep,
  backStep,
  resetStep,
  checkAnswer,
} = testingSlice.actions;
export default testingSlice.reducer;
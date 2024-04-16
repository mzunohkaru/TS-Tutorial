export {};

// Record<K, T>

type Prefectures = 'Tokyo' | 'Hiroshima' | 'Kanagawa' | 'Saitama';

type Covid19InfectionInfo = {
    city_name: string;
    confirmed_cases: number;
};

let covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
    Tokyo: {
        city_name: '東京',
        confirmed_cases: 224450,
    },
    Hiroshima: {
        city_name: '広島',
        confirmed_cases: 1000,
    },
    Kanagawa: {
        city_name: '神奈川',
        confirmed_cases: 9876,
    },
    Saitama: {
        city_name: '埼玉',
        confirmed_cases: 15780,
    },
}

console.log(covid19Japan);

covid19Japan.Tokyo.confirmed_cases = 9999999;

console.log(covid19Japan);


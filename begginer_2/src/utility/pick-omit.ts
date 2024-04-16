export {};

type DetailedProfile = {
    name: string;
    height: number;
    weight: number;
}

// DetailedProfileのweightプロパティが不要だった場合-1
type PickProfile = Pick<DetailedProfile, 'name' | 'height'>;
// DetailedProfileのweightプロパティが不要だった場合-2
type OmitProfile = Omit<DetailedProfile, 'weight'>;


interface TriviaOptions {
    difficulty: "Easy" | "Medium" | "Hard"
}

/**
 * @returns options: [] - Object
 * @returns question: "" - String
 * @returns answer: "" - String
 * @returns correct_option: "" - String
 * @returns difficulty: "" - String
 */

export function trivia(obj: TriviaOptions): object;
export function trivia(): object;
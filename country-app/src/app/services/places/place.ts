export interface PlaceSuggestion {
    structured_formatting: {
        main_text: string;
        secondary_text: string;
    };
    description: string;
    id: string;
    place_id: string;
}

export interface PlaceSuggestionResponse {
    predictions: PlaceSuggestion[]
}
export interface ApiError {
    response?: {
        data?: {
            error?: string;
            messages?: {
                path: string;
                message: string;
            }[];
        };
    };
}

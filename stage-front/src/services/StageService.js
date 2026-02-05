import { stages } from "../data/stages";

export const StageService = {
  getAll: () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(stages), 500);
    }),

  getById: (id) =>
    new Promise((resolve) => {
      setTimeout(
        () => resolve(stages.find((s) => s.id === Number(id))),
        500
      );
    }),
};
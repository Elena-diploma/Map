import ErrorRepository from '../ErrorRepository';

test('проверка при наличии кода', () => {
    const errorNew = new ErrorRepository();
    expect(errorNew.translate('404')).toBe('Not Found');
});

test('проверка при отсутствии кода', () => {
    const errorNew = new ErrorRepository();
    expect(errorNew.translate('401')).toBe('Unknown error');
});
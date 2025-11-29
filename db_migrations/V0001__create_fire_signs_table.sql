CREATE TABLE IF NOT EXISTS fire_signs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    image_url TEXT,
    
    has_emergency_power BOOLEAN DEFAULT false,
    voltage VARCHAR(50),
    current_consumption VARCHAR(50),
    led_count INTEGER,
    material VARCHAR(255),
    ip_rating VARCHAR(20),
    temperature_range VARCHAR(50),
    dimensions VARCHAR(100),
    weight DECIMAL(5, 3),
    warranty_months INTEGER,
    
    features TEXT[],
    
    in_stock BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_fire_signs_category ON fire_signs(category);
CREATE INDEX idx_fire_signs_in_stock ON fire_signs(in_stock);

INSERT INTO fire_signs (
    name, 
    category, 
    description, 
    price,
    has_emergency_power,
    voltage,
    current_consumption,
    led_count,
    material,
    ip_rating,
    temperature_range,
    dimensions,
    weight,
    warranty_months,
    features
) VALUES (
    'Спектрум М "Выход"',
    'Эвакуационные знаки',
    'Стандартный световой оповещатель с аварийным питанием',
    2500.00,
    true,
    '220В (переменный ток)',
    '12 мА',
    8,
    'Алюминий, акрил',
    'IP52',
    '-30...+55°С',
    '360x180x18 мм',
    0.250,
    12,
    ARRAY[
        'Сверхъяркие светодиоды 5В для равномерной подсветки',
        'Корпус из анодированного алюминиевого профиля',
        'Разборный корпус для замены надписи и фона',
        'Блок аварийного питания с аккумулятором на 2,5 часа',
        'Возможность любой надписи и фона под заказ',
        'Универсальное крепление (стена, подвес, потолок)'
    ]
);
-- Creates product tables
create table products (
    product_id serial primary key not null,
    name varchar(40) not null,
    description varchar(80) not null,
    price integer not null,
    image_url text not null
);

-- Create a product (returns all products)
insert into products (name, description, price, image_url)
values ($1, $2, $3, $4);
select * from products;

-- Read all products (returns all products)
select * from products;

-- Read a single product (returns a single product)
select * from products
where product_id = $1;

-- Update a product description (returns a single product)
update products
set description = $2
where product_id = $1;
returning *;

-- Delete a product (returns all remaining products)
delete from products
where product_id = $1;
select * from products;
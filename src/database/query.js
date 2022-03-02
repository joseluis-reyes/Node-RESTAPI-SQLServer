export const querys = {
    getAllProducts: `select * from products`,
    addNewProduct: `insert into products (name, description, quantity) values (@name, @description, @quantity)`,
    getProductById: `select * from products where Id=@id`,
    deleteProduct: `delete from products where Id=@id`,
    getTotalProducts: `Select count(*) as 'total' from products`,
    updateProductbyId: `update products set name = @name, description = @description, quantity = @quantity where Id=@id`
}
class TodoItemsController < ApplicationController

  def default_serializer_options
    {root: false}
  end

  respond_to :json

  def index
    @todo_items = TodoItem.all
    respond_with(@todo_items)
  end

  def create
    @todo_item = TodoItem.new(todo_item_params)
    @todo_item.save
    respond_with(@todo_item)
  end

  def update
    @todo_item = TodoItem.find(params[:id])
    @todo_item.save
    respond_with(TodoItem.all)
  end

  def destroy
    @todo_item = TodoItem.find(params[:id])
    @todo_item.destroy
    respond_with(TodoItem.all)
  end

  private

  def todo_item_params
    params.require(:todo_item).permit(:name)
  end

end


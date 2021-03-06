class TodoItemsController < ApplicationController

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
    @todo_item.update(todo_item_params)
    respond_with(@todo_item)
  end

  def destroy
    @todo_item = TodoItem.find(params[:id])
    @todo_item.destroy
    respond_with(@todo_item)
  end

  private

  def todo_item_params
    params.require(:todo_item).permit(:name, :is_finished)
  end

end


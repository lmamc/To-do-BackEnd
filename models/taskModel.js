import { supabase } from '../configs/supabaseClient.js';

export const getAllTasks = async () => {
  const { data, error } = await supabase.from('tasks').select('*');
  if (error) throw new Error(error.message);
  return data;
};

export const createTask = async (title) => {
  const { data, error } = await supabase.from('tasks').insert([{ title, completed: false }]);
  if (error) throw new Error(error.message);
  return data[0];
};

export const updateTask = async (id, completed) => {
  const { data, error } = await supabase.from('tasks').update({ completed }).eq('id', id);
  if (error) throw new Error(error.message);
  return data[0];
};

export const deleteTask = async (id) => {
  const { error } = await supabase.from('tasks').delete().eq('id', id);
  if (error) throw new Error(error.message);
  return { message: 'Task deleted' };
};

import { redirect } from "@remix-run/node";

export const loader = () => redirect('/tags/my%20cats');
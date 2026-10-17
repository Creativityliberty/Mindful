<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

final class CanonicalizePublicUrl
{
    public function handle(Request $request, Closure $next): Response
    {
        if (! $request->isMethod('GET') && ! $request->isMethod('HEAD')) {
            return $next($request);
        }

        $path = parse_url($request->getRequestUri(), PHP_URL_PATH) ?: '/';
        $canonicalPath = $path === '/' ? '/' : rtrim($path, '/');

        $configuredUrl = rtrim((string) config('app.url'), '/');
        $configuredHost = parse_url($configuredUrl, PHP_URL_HOST);
        $redirectHost = app()->isProduction()
            && is_string($configuredHost)
            && strtolower($request->getHost()) !== strtolower($configuredHost);

        if ($path === $canonicalPath && ! $redirectHost) {
            return $next($request);
        }

        $baseUrl = $redirectHost ? $configuredUrl : $request->getSchemeAndHttpHost();
        $target = $baseUrl.$canonicalPath;

        if ($query = $request->getQueryString()) {
            $target .= '?'.$query;
        }

        return redirect()->to($target, 301);
    }
}
